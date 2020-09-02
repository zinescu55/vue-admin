let publicPath = process.env.NODE_ENV === 'production' ? 'vue-admin/' : '/';

module.exports = {
  publicPath,
  productionSourceMap: false,
};
