// config/routes.js

const rateLimit = require('express-rate-limit');
// Bikin limiter langsung di config
const userLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 50 });
const productLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200 });

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