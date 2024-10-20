/**
 * Title:Handler
 * Description:Sample Handler
 * Author: TIT
 * Date:20.10.24
 *
 */

// module scaffolding

const handler = {};

handler.sampleHandler = (reqProps, callback) => {
  console.log(reqProps);
  callback(200, {
    message: "This is Sample Url",
  });
};

module.exports = handler;
