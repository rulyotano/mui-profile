module.exports = {
  trailingSlash: false,
  exportPathMap: function () {
    return {
      '/': {
        page: '/'
      }
    };
  },
  async redirects() {
    return []
  },
};