/**
 * Title:Routes
 * Description:Application Routes
 * Author: TIT
 * Date:20.10.24
 *
 */

//dependencies

const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
