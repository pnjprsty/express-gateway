# Express Gateway
A simple API Gateway built with Express.js and http-proxy-middleware.

## Overview
This project provides a basic API Gateway that routes incoming requests to multiple backend services. It utilizes Express.js as the web framework and http-proxy-middleware for proxying requests.

## Features
* **Multiple Backend Services**: Supports routing to multiple backend services.
* **Rate Limiting**: Includes rate limiting for specific routes using express-rate-limit.
* **Configurable Routes**: Routes are configurable through a separate configuration file.

## Requirements
* **Node.js**: >= 18.0.0
* **npm**: >= 6.0.0

## Installation
1. Clone the repository: `git clone https://github.com/your-username/express-gateway.git`
2. Install dependencies: `npm install`

## Configuration
Configure routes in `./config/routes.js`. Each route can have the following properties:
* **target**: The URL of the backend service.
* **pathRewrite**: An object that specifies path rewriting rules.
* **limiter**: An optional rate limiter instance.

## Usage
Start the gateway: `node gateway.js`

The gateway will listen on port 3000. You can access it at `http://localhost:3000`.

## Example Use Case
Suppose you have two backend services:
* **User Service**: listens on port 5001
* **Product Service**: listens on port 5002

Configure routes in `./config/routes.js`:
```javascript
module.exports = {
  '/api/user': {
    target: 'http://localhost:5001',
    pathRewrite: { '^/api/user': '' },
    limiter: userLimiter
  },
  '/api/product': {
    target: 'http://localhost:5002',
    pathRewrite: { '^/api/product': '' },
    limiter: productLimiter
  }
};
```
Now, incoming requests to `http://localhost:3000/api/user` will be proxied to `http://localhost:5001`, and requests to `http://localhost:3000/api/product` will be proxied to `http://localhost:5002`.

## Contributing
Contributions are welcome! Please submit a pull request with your changes.

## License
This project is licensed under the ISC License.