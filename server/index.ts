import { createServer, IncomingMessage, ServerResponse } from "http";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";

// サーバーを作成
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  // Reactコンポーネントをサーバーサイドレンダリング
  const appHtml = renderToString(React.createElement(App));

  // HTMLドキュメントを生成
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(html); // サーバーサイドレンダリングされたHTMLを返す
});

// ポート9000でリッスン
const PORT = 9000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
