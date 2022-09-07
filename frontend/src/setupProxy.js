const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      logLevel: 'debug',
      target: "http://137.184.190.121:8080/",
      changeOrigin: true,
    })
  );
};