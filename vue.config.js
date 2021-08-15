module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production', // 生产环境禁用
  // 修改入口文件地址为examples下的main.js
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    }
  },
  // 将packages加入打包编译任务中
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add('packages')
      .end()
      .exclude.add('node_modules')
      .end()
      .use('babel')
      .loader('babel-loader');
  }
};
