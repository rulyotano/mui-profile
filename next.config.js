module.exports = {
  trailingSlash: false,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/articles': { page: '/articles' },
      '/projects': { page: '/projects' },
    };
  },
  async redirects() {
    return []
  }
};