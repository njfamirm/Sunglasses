const path = require("path");

module.exports = {
  mode: "production",
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: [path.resolve(__dirname, "public", "css")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".css"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public", "js"),
  },
};
