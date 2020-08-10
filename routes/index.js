var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('')
});

//let endpoints: ['/']
//unsupported methods
// app.all('/', function(req, res) {
//   console.log('Received unsupported method request endpoint \'/\'.');
//   methodNotSupportedHandler(res, ["GET"]);
// });
//invalid endpoints
// app.use(function (req, res) {
//   console.log('Received request on invalid endpoint.');
//   res.status(404).json({ message: "Invalid endpoint. Please use the appropriate endpoint for server functionality.", endpoints: endpoints});
// });

// /**
// * Error handler for 405 errors
// * @param {any} res response object
// * @param {string[]} supportedMethods string array of allowed methods
// */
// function methodNotSupportedHandler(res, supportedMethods) {
//   //add header
//   res.set({ 'Allow': supportedMethods });
//   res.status(405).json({ message: "Method not supported." });
// }

module.exports = router;
