var express = require('express');
var router = express.Router();
const {URL_SERVICE_MEDIAS} = process.env;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(URL_SERVICE_MEDIAS)
  res.render('index', { title: URL_SERVICE_MEDIAS });
});

module.exports = router;
