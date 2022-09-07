const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      logLevel: 'debug',
      target: 'http://yourIpAddress',
      changeOrigin: true,
    })
  );
};