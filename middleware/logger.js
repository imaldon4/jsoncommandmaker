const moment = require("moment"),
  logger = (req, res) => {
    console.log(
      `${req.protocol}://${req.get("host")}${
        req.originalUrl
      }: ${moment().format()}`
    );
    next();
  };

module.exports = logger;
