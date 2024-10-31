// const http = require("http");
// import http from "http";

// const server = http.createServer((request, response));
// console.log(request);
// response.end("hello")

// server.listen(8100)

import express from "express";

const app = express();
const port = 8100;

app.listen(port, () => {
  console.log("server ajillaa");
});
