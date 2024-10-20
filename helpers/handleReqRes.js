//dependencies

const url = require("url");

const { StringDecoder } = require("string_decoder");

const routes = require("../routes");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");

//module scaffolding

const handler = {};

handler.handleReqRes = (req, res) => {
  //request handle
  //get the url and parse it
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObj = parseUrl.query;
  const headerObj = req.headers;
  const requestedProperties = {
    parseUrl,
    path,
    trimmedPath,
    method,
    headerObj,
    queryStringObj,
  };
  const decoder = new StringDecoder("utf-8");
  let realData = "";
  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  chosenHandler(requestedProperties, (statusCode, payLoad) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payLoad = typeof payLoad === "object" ? payLoad : {};
    const payLoadStr = JSON.stringify(payLoad);

    //return the final response
    res.writeHead(statusCode);
    res.end(payLoadStr);
  });
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    // response handle
    res.end("Hello Programmers world");
  });
};
module.exports = handler;
