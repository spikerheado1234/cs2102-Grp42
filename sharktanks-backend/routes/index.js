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
			res.send(data[0]);
		});
});

/* Legitimate routes */
router.post('/createUser', function(req, res, next) {
	indexController.createUser(req.body.name, 
								req.body.emailAddress, 
								req.body.role, 
								req.body.password).then((data) => {
									console.log("Main function");
									console.log(data);
									res.send({
										code: 200
									})	
								}).catch((err)  => {
									console.log(err);
									res.send({
										code: 204
									});
								});
});

router.post('/createProject', function(req, res, next) {
	// TODO Need to generate project id.
	indexController.createProject(req.body.title,
									req.body.description,
									req.body.status,
									req.body.userID,
									req.body.category)
									.then("OK")
									.catch((err) => {
										console.log(err); // For debugging purposes only.
										res.send('NOT OK');
									});
});

router.delete('/deleteProject', function(req, res, next) {
	indexController.deleteProject(req.body.projectID)
								  .then(res.send('OK'))
								  .catch((err) => {
								  	console.log(err);
								  	res.send("NOT OK");
								  });
});

router.post('/giveDonation', function(req, res, next) {
	// TODO Need to generate donation id.
	indexController.giveDonation(req.body.projectID,
								 req.body.userID,
								 req.body.amount)
								 .then(res.send('OK'));
});

// Get the total amount a project has in funding.
router.get('/getFunding/', function(req, res, next) {
	console.log(req.query);
	indexController.getFunding(req.query['projectId'])
					.then((data) => {
						res.send(data);
					})
					.catch((err) => {
						console.log(err); // For debugging purposes only.
					});
});

router.get('/getAllStatus',  function(req, res, next) {
	indexController.getAllStatus()
					.then((data) => {
						res.send(data);
					}).catch((err) => {
						console.log(err);
						res.send({code: 204});
					})
});

router.get('/getAllCategories', function(req, res, next) {
	indexController.getAllCategories()
					.then((data) => {
						res.send(data);
					}).catch((error) => {
						console.log(error);
						res.send({code: 204});
					});
});

// Search via the following endpoints.
// Search via a title, a fuzzy search.
router.get('/searchByProjects/:title', function(req, res, next) {
	console.log(req.params.title);
	indexController.searchByProjects(req.params.title)
					.then((data) => {
						res.send(data);
					});
});

router.get('/searchByCategories/:id', function(req, res, next) {
	indexController.searchByCategories(req.params.id)
					.then((data) => {
						res.send(data);
					});
});

router.post('/updateUserId', function(req, res, next) {
	indexController.updateUserId()
					.then((data) => {
						res.send(data);
					});
});

router.post('/updateProjectId', function(req, res, next) {
	indexController.updateProjectId()
					.then((data) => {
						res.send(data);
					});
});

router.post('/updateDonationId', function(req, res, next) {
	indexController.updateDonationId()
					.then((data) => {
						res.send(data);
					});
});

router.get('/searchByStatus', function(req, res, next) {
	indexController.searchByStatus(req.body.statusID)
					.then((data) => {
						res.send(data);
					});
});

router.get('/searchByUser', function(req, res, next) {
	indexController.searchByUser(req.body.userID,
								 req.body.role)
					.then((data) => {
						res.send(data);
					});
});

router.get('/allProjects', function(req, res, next) {
	indexController.searchAllProjects()
					.then((data) => {
						res.send(data);
					});
});

router.post('/login', function(req, res, next) {
	indexController.login(req.body.emailAddress, req.body.password)
					.then((data) => {
						console.log(data[0])
						if (data.length == 0) { // If emailaddress, password doesn't match.
							res.send({code: 204 });
						}
						res.send({
							code: 200,
							user: data[0]
						});
					})
					.catch((error) => {
						res.send({code: 205});
					})
});

router.get('/getKeywords', function(req, res, next) {
	indexController.getKeywords()
					.then((data) => {
						res.send(data);
					}).catch(error => {
						console.log(error);
						res.send({code: 205});
					});
});

module.exports = router;
