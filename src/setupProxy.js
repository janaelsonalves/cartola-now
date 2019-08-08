const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/cartola", {
      //   target: "https://login.globo.com/authentication",
      target: "https://api.cartolafc.globo.com",
      secure: false,
      pathRewrite: {
        "^/cartola": ""
      },
      changeOrigin: true
    })
  );
  app.use(
    proxy("/api/auth", {
      target: "https://login.globo.com/api/authentication",
      secure: false,
      pathRewrite: {
        "^/api/auth": ""
      },
      changeOrigin: true
    })
  );
  //   app.use(proxy('/api/auth', { target: 'https://api.cartolafc.globo.com' }));
};
