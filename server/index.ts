import { createServer, IncomingMessage, ServerResponse } from "http";

// サーバーを作成
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world\n");
});

// ポート9000でリッスン
const PORT = 9000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
