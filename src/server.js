const http = require("node:http");
const tales = require("./stories.json");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/tales") {
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(tales));
  }
  res.statusCode = 404;
  res.end();
});

if (require.main === module) server.listen(3000);
module.exports = server;
