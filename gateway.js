const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const routes = require('./config/routes');
const app = express();

Object.entries(routes).forEach(([path, config]) => {
    if (config.limiter) {
        app.use(path, config.limiter); // pasang rate limit jika ada
    }
    app.use(path, createProxyMiddleware({
        changeOrigin: true,
        ...config
    }));
});

app.listen(3000, () => {
    console.log('Gateway jalan di http://localhost:3000');
});
