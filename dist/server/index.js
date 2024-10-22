import { createServer } from "http";
// サーバーを作成
var server = createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello world\n");
});
// ポート9000でリッスン
var PORT = 9000;
server.listen(PORT, function () {
    console.log("Server running at http://localhost:".concat(PORT, "/"));
});
