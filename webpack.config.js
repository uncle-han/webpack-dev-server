const path = require('path');

module.exports = {
    devServer: {
        port: 7788,//控制端口
        open: true //是否自动打开默认浏览器
    },
    mode: 'development',
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
  
};
