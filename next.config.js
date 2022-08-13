module.exports = {
  exportTrailingSlash: false,
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