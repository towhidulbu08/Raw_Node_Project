/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Towhidul Islam Tamim
 * Date: 18/10/2024
 *
 */

//dependencies

const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

// an object-module scaffolding

const app = {};

// configuration

app.config = {
  port: 3000,
};

// create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Server is Running at Port Number ${app.config.port}`);
  });
};

// handle Request ,Response
app.handleReqRes = handleReqRes;

//  Start The Server

app.createServer();
