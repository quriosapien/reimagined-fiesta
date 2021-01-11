const PROXY_TARGETS = {
  local: 'http://localhost:3000/',
  prod: 'https://valuedash.scalevision.net/'
}

module.exports = {
  assetsDir: 'static-assets',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '^/api': {
        target: PROXY_TARGETS.prod,
        ws: true,
        changeOrigin: true
      }
    }
  },
  lintOnSave: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Kumar\'s Vue Project'
    }
  },
  productionSourceMap: false
}
