var debug = (process.env.NODE_ENV !== "production");
console.log(debug);
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/app.js",
  output: {
    path: __dirname + "/js",
    filename: debug ? "app.js" : "app.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: false,
      sourcemap: false
    }),
  ],
  debug: debug
};