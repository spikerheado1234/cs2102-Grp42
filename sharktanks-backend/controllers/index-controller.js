var db = require("../server/models/index.js");

/* For pre-alpha demonstration only, to be deleted afterwards. */
exports.dataList = function(statusId) {
	return db.sequelize.query("SELECT * FROM status LIMIT 1",
							{ type: db.sequelize.QueryTypes.SELECT })
							.then(status => {
								return status;
							});
};

// Creates a new user  with a particular role, emailAddress, password
// and name within the db. 
// trigger updateUserId for tablesID
exports.createUser = function(name, emailAddress, role, password) {
	var nameToInsert = name;
	var emailAddressToInsert = emailAddress;
	var roleToInsert = role;
	var passwordToInsert = password;
	return db.sequelize.query("SELECT MAX(u1.userid) FROM users u1", {type: db.sequelize.QueryTypes.SELECT})
							.then((data) => {
								var userIdToInsert = data[0].max + 1;
								console.log("tits");
								return db.sequelize.query("INSERT INTO users(emailaddress, name, role, password, userid) VALUES(:emailAddress, :name, :role, :password, :userid)",
								{replacements: {emailAddress: emailAddressToInsert,
												name: nameToInsert,
												role: roleToInsert,
												password: passwordToInsert,
												userid: userIdToInsert},
								 type: db.sequelize.QueryTypes.INSERT})
							}).then((data) => {
								console.log(data);
								return data;
							}).catch((error) => {
								console.log("blah");
								return error;
							});
};

// Creates a new project within a db.
// trigger updateProjectId for tablesID
exports.createProject = function(title, description, statusId, userID, keyWords, categoryId) {
	var titleToInsert = title;
	var descriptionToInsert = description;
	var statusIdToInsert = statusId;
	var userIdToInsert = userID;
	var categoryIdToInsert = categoryId;
	var keywordsToInsert = keyWords;
	
	db.sequelize.query("SELECT MAX(p1.projectid) FROM project p1", {type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
							var projectIdToInsert = data[0].max + 1;
							return db.sequelize.query("INSERT INTO project(projectid, userid, statusid, description, title, categoryid)" +
							" VALUES(:projectId, :userId, :statusId, :description, :title, :categoryId)",
							{replacements: {projectId: projectIdToInsert,
											 userId: userIdToInsert,
											 statusId: statusIdToInsert, 
											 description: descriptionToInsert, 
											 title: titleToInsert, 
											 categoryId: categoryIdToInsert},
											 type: db.sequelize.QueryTypes.INSERT})
						})
	for (var i = 0; i < keyWords.length; i++) {
		db.sequelize.query("SELECT MAX(p1.projectid) FROM project p1", {type: db.sequelize.QueryTypes.SELECT})
		.then((data) => {
			var projectId = data[0].max;
			db.sequelize.query("SELECT k1.keywordid FROM keywords k1 WHERE k1.keywordid = :keyWordSearch",
							{ replacements: { keyWordSearch: keywordsToInsert[i] },
							type : db.sequelize.QueryTypes.SELECT
						}).then((data) => {
							var idToInsert = data[0].keywordid;
							db.sequelize.query("INSERT INTO keywordAndProjects(projectid, keywordid, words)\
												VALUES(:idToinsert, :kIdToInsert, :word)", 
												{replacements: {idToInsert : idToInsert,
																kIdToInsert: idToInsert, 
																word: keyWordsToInsert[i]}});
						});
		})
	}
};

// Delets a particular project with id projectId from the db.
exports.deleteProject = function(projectId) {
	projectIdToDelete = projectId;
	return db.sequelize.query("DELETE FROM project WHERE projectid = :projectId", 
							{replacements: {projectId: projectIdToDelete}, 
							 type: db.sequelize.QueryTypes.DELETE})
						.then((data) => {
							return data;
						});
};

// Makes a new donation within a db for project with id of projectId,
// Associated with a user of userId with a particular amount.
// trigger updateDonationId for tablesID
exports.giveDonation = function(projectId, userId, amount) {
	projectIdToInsert = projectId;
	userIdToInsert = userId;
	amountToInsert = amount;
	return db.sequelize.query("SELECT MAX(d1.donationid) FROM donations d1", {type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
							var donationIdToInsert = parseInt(data[0].max, 10) + 1;
							return db.sequelize.query("INSERT INTO donations(donationid, projectid, userid, amount)" +
							" VALUES(:donationId, :projectId, :userId, :amount)",
							{replacements: 
								{donationId: donationIdToInsert,
								 projectId: projectIdToInsert,
								 userId: userIdToInsert,
								 amount: amountToInsert},
								 type: db.sequelize.QueryTypes.INSERT});
						});
};

// Gets the  total funding for a project with an id of projectId.
exports.getFunding = function(projectId) {
	var projectIdToQuery = projectId;
	return db.sequelize.query("SELECT SUM (d1.amount)" +
							   " FROM donations d1" +
							   " WHERE d1.projectid = :projectId" +
							   " GROUP BY d1.projectid",
							   {replacements: {projectId : projectIdToQuery},
								type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
							return data;
						});
};

// Searches for all the projects with a particular projectId.
exports.searchByProjects = function(projectName) {
	var projectNameToQuery = projectName;
	return db.sequelize.query("SELECT *" +
							   " FROM project p1" +
							   " WHERE p1.title LIKE :projectName", 
							   {replacements: {projectName: "%" + projectNameToQuery + "%"},
								type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
								return data;
							 });
};

// Searches for all the projects with a particular categoryId.
exports.searchByCategories = function(category) {
	var categorytoquery = category;
	return db.sequelize.query("SELECT p1.projectid, p1.userid, p1.statusid, p1.categoryid, p1.description, p1.title, p1.url" +
							   " FROM categories c1 INNER JOIN project p1 ON" +
							   " c1.categoryid = p1.categoryid AND c1.name = :category", 
							   {replacements: {category: categorytoquery},
								type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
								return data;
							});
};

// Searches for all the projects with a particular statusId.
exports.searchByStatus = function(statusId) {
	var statusIdToQuery = statusId;
	return db.sequelize.query("SELECT *" +
							   " FROM project p1" +
							   " WHERE p1.statusid = :statusId",
							   {replacements: {statusId: statusIdToQuery},
								type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
								return data;
							});
};

// Gives all the projects associated with a particular user with a particular role.
exports.searchByUser = function(userId, role) {
	var userIdToQuery = userId;
	var roleToQuery = role;
	return db.sequelize.query("SELECT p1.projectid, p1.userid, p1.statusid, p1.categoryid, p1.description, p1.title, p1.duration, p1.startDate" +
							   " FROM users u1, projects p1" +
							   " WHERE u1.userid = p1.userid AND" +
							   		 " p1.userid = :userId AND" +
							   		 " u1.role = :role",
							  {replacements: {userId: userIdToQuery,
							  				  role: roleToQuery},
							   type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
								return data;
							});
};

// Gives all the projects associated with particular keyword(s)
exports.searchByKeyword = function(words) {
	var wordsToQuery = words;
	return db.sequelize.query("SELECT p1.projectid, p1.userid, p1.statusid, p1.categoryid, p1.description, p1.title, p1.duration, p1.startDate" +
							   " FROM projects p1" +
							   " WHERE p1.description LIKE '%words%' OR " +
							   		  "p1.title LIKE '%words%'",
								{type: db.sequelilze.QueryTypes.SELECT})
						.then((data) => {
							return data;
						});
};

// Gives all the projects in the DB.
exports.searchAllProjects = function() {
	return db.sequelize.query("SELECT p1.description, p1.title, k1.words, u1.name, c1.name, p1.projectid, p1.url, SUM (d1.amount)" +
							   " FROM project p1, keywordandprojects k1, categories c1, users u1, donations d1" +
							   " WHERE p1.projectid = k1.projectid AND" + 
									  " p1.categoryid = c1.categoryid AND" +
									  " p1.userid = u1.userid AND" +
									  " u1.role = 'Entrepreneur' AND" + 
									  " d1.projectid = p1.projectid" +
									  " GROUP BY p1.projectid, u1.name, c1.name, p1.title, k1.words, p1.description", 
							   {type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
								return data;
							});
};

// Gives project with highest funding
exports.highestFunding = function() {
	return db.sequelize.query("SELECT p1.title" +
							   " FROM project p1, donations d1" +
							   " WHERE p1.projectid = d1.projectid" +
							   " GROUP BY d1.projectid" +
							   " HAVING MAX(d1.amount)",
							   {type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
							return data;
						});
};

// Gives all projects and their current funding
exports.allFunding = function() {
	return db.sequelize.query("SELECT p1.title, SUM(d1.amount)" +
							   " FROM project p1 LEFT OUTER JOIN donations d1 ON p1.projectid = d1.projectid" +
							   " GROUP BY d1.projectid",
							   {type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
							return data;
						});
};

// Function that is triggered when a new user is added
// Updates the userId in tablesId
exports.updateUserId = function(userId) {
	return db.sequelize.query("CREATE TRIGGER updateuserid AFTER INSERT ON users" +
								" FOR EACH STATEMENT" +
								" BEGIN" +
								" UPDATE tablesId SET userid = userid + 1 WHERE userid = userid;" +
								" END;",
								{type: db.sequelize.QueryTypes.UPDATE})
						.then((data) => {
							return data;
						});
}

// Function that is triggered when a new project is added
// Updates the projectId in tablesId
exports.updateProjectId = function() {
	return db.sequelize.query("CREATE TRIGGER updateprojectid AFTER INSERT ON project" +
								" FOR EACH STATEMENT" +
								" BEGIN" +
								" UPDATE tablesid SET projectid = projectid + 1 WHERE projectid = projectid;" +
								" END;",
								{type: db.sequelize.QueryTypes.UPDATE})
						.then((data) => {
							return data;
						});
}

// Function that is triggered when a new donation is added
// Updates the donationId in tablesId
exports.updateDonationId = function() {
	return db.sequelize.query("CREATE TRIGGER updatedonationid AFTER INSERT ON donations" +
								" FOR EACH STATEMENT" +
								" BEGIN" +
								" UPDATE tablesid SET donationid = donationid + 1 WHERE donationid = donationid;" +
								" END;")
						.then((data) => {
							return data;
						});
}

// Function that is triggered when a new keyword is added
// Updates the keywordId in tablesId
exports.updateKeywordId = function() {
	return db.sequelize.query("CREATE TRIGGER updatekeywordid AFTER INSERT ON keywords" +
								" FOR EACH STATEMENT" +
								" BEGIN" +
								" UPDATE tablesid SET keywordid = keywordid + 1 WHERE keywordid = keywordid;" +
								" END;")
						.then((data) => {
							return data;
						});
}

exports.login = function(emailAddress, password) {
	var emailAddressToQuery = emailAddress;
	var passwordToQuery = password;
	return db.sequelize.query("SELECT u1.name, u1.role, u1.emailaddress, u1.userid " + 
							   "FROM users u1 " +  
							   "WHERE u1.emailaddress = :emailAddress AND u1.password = :password", 
							   {replacements: {emailAddress: emailAddressToQuery, password: passwordToQuery},
								type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
							return data;
						});
}

exports.getAllStatus = function() {
	return db.sequelize.query("SELECT * from status", 
								{ type: db.sequelize.QueryTypes.SELECT })
								.then((data) => {
									return data;
								});
}

exports.getAllCategories = function() {
	return db.sequelize.query("SELECT * from categories",
								{ type: db.sequelize.QueryTypes.SELECT })
								.then((data) => {
									return data;
								})
}

exports.getKeywords = function() {
	return db.sequelize.query("SELECT * From keywords",
						{ type: db.sequelize.QueryTypes.SELECT })
						.then((data) => {
							return data;
						});
};

// Function that adds new keyword into keywords table if such a keyword does not exist
exports.addKeyword = function(newKeyword) {
	var newKeywordToQuery = newKeyword;
	return db.sequelize.query("SELECT COUNT(*)" +
									" FROM keywords" +
									" WHERE words = :newKeyword",
									{ replacements: { newKeyword: newKeywordToQuery },
									  type: db.sequelize.QueryTypes.SELECT })
							.then((data) => {
								if (data === 0) {
									return db.sequelize.query("SELECT keywordid from tablesid",
																{ type: db.sequelize.QueryTypes.SELECT })
														.then((data) => {
															var newKeywordId = data+1;
															return db.sequelize.query("INSERT INTO keywords VALUES(keywordid, :newKeyword)",
																						{ replacements: { keywordId: newKeywordId, newKeyword: newKeywordToQuery },
																						  type: db.sequelize.QueryTypes.INSERT })
																				.then((data) => {
																					return data;
																				});
														});
								}					    
								return null;		
							});
};

exports.getProjectInformation = function(projectId) {
	var projectIdToQuery  = projectId;
	return db.sequelize.query("SELECT p1.description, p1.title, c1.name, s1.statusword, u1.role, u1.name" + 
							  " FROM project p1, categories c1, users u1, status s1" + 
							  " WHERE p1.categoryid = c1.categoryid AND p1.userid = u1.userid AND s1.statusid = p1.statusid AND p1.projectid = :queryId", 
								  { replacements: {queryId : projectIdToQuery},
									type: db.sequelize.QueryTypes.SELECT})
									.then(data => {
										console.log(data);
										return data;
									});
}
