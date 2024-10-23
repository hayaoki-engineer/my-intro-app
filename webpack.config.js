import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import nodeExternals from "webpack-node-externals";

// ESモジュール用の__dirnameの代替
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// クライアント側の設定
const clientConfig = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      serveIndex: false,
    },
    port: 3000,
    open: true,
  },
};

// サーバー側の設定
const serverConfig = {
  entry: "./server/index.ts",
  target: "node", // サーバー用に指定
  externals: [nodeExternals()], // Node.js 標準モジュールを除外
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.cjs", // 拡張子を .cjs に変更
    libraryTarget: "commonjs2", // CommonJS形式で出力
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "production", // 本番モード
};

export default [clientConfig, serverConfig];
