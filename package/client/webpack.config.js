const path = require("path");

module.exports = {
  mode: "production",
  devtool: "eval-source-map",
  entry: {
    index: "./src/index.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public", "js"),
  },
};
