var express = require('express');
var router = express.Router();
var indexController = require("../controllers/index-controller.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({});
});

/* For pre-alpha demonstration only, to be deleted after */
router.get('/getData', function(req, res, next) {
	var dataRetrieved = indexController.dataList();
	res.send({data: dataRetrieved});
});

router.post('/postData', function(req, res, next) {
	var statusId = req.statusId;
	var statusWord = req.statusWord;
	indexController.dataPost(statusId, statusWord);
	res.send('ok');
});

module.exports = router;
