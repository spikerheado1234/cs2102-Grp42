var express = require('express');
var router = express.Router();
var indexController = require("../controllers/index-controller.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({});
});

/* For pre-alpha demonstration only, to be deleted after */
router.get('/getData', function(req, res, next) {
	indexController.dataList()
		.then((data) => {
			console.log(data[0]);
			res.send(data[0]);
		});
});

router.post('/postData', function(req, res, next) {
	indexController.dataPost(req.body.statusId, req.body.statusWord);
	res.send('ok');
});

module.exports = router;
