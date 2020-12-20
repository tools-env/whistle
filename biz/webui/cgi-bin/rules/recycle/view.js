var recycleBin = require('../../../../../lib/rules/util').rules.recycleBin;

module.exports = function(req, res) {
  var item = recycleBin.getFile(req.query.name);
  res.json({
    ec: item ? 0 : 3,
    text: item && item.data
  });
};