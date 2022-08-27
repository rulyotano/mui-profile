module.exports = {
  trailingSlash: false,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/articles': { page: '/articles' },
    };
  },
  async redirects() {
    return []
  }
};