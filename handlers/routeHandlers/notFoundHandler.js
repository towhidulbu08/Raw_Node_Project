/**
 * Title:Handler
 * Description: notFoundHandler
 * Author: TIT
 * Date:20.10.24
 *
 */

// module scaffolding

const handler = {};

handler.notFoundHandler = (reqProps, callback) => {
  console.log(reqProps);
  callback(404, {
    message: "Your requested url was not found",
  });
};

module.exports = handler;
