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
	return db.sequelize.query("INSERT INTO users(emailAddress, userID, name, role, password) VALUES(:emailAddress, :userID, :name, :role, :password)",
								{replacements: {emailAddress: emailAddressToInsert,
												userID: currUserId,
												name: nameToInsert,
												role: roleToInsert,
												password: passwordToInsert},
								 type: db.sequelize.QueryTypes.INSERT})
								.then((data) => {
									return data;
								});
};

// Creates a new project within a db.
// trigger updateProjectId for tablesID
exports.createProject = function(title, duration, description, startDate, statusID, userID, userRole, keyWords, categoryID) {
	var titleToInsert = title;
	var durationToInsert = duration;
	var descriptionToInsert = description;
	var startDateToInsert = startDate;
	var statusIdToInsert = statusID;
	var userIdToInsert = userID;
	var userRoleToInsert = userRole;
	var keyWordsToInsert = keyWords;
	var categoryIdToInsert = categoryID;
	return db.sequelize.query("INSERT INTO project(projectID, userID, statusID, description, title, duration, startDate)" +
								 " VALUES(:projectId, :userId, :statusId, :description, :title, :duration, :startDate)",
								 {replacements: {projectId: currProjectId,
								 				 userId: userIdToInsert,
								 				 statusId: statusIdToInsert, 
								 				 description: descriptionToInsert, 
								 				 title: titleToInsert, 
								 				 duration: durationToInsert, 
								 				 startDate: startDateToInsert},
								 				 type: db.sequelize.QueryTypes.INSERT})
								.then((data) => {
									return data;
								});
};

// Delets a particular project with id projectId from the db.
exports.deleteProject = function(projectId) {
	projectIdToDelete = projectId;
	return db.sequelize.query("DELETE FROM project WHERE projectID = :projectId", 
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
	return db.sequelize.query("SELECT MAX(d1.donationID) FROM donations d1", {type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
							var donationIdToInsert = parseInt(data[0].max, 10) + 1;
							return db.sequelize.query("INSERT INTO donations(donationID, projectID, userID, amount)" +
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
							   " WHERE d1.projectId = :projectId" +
							   " GROUP BY d1.projectId",
							   {replacements: {projectId : projectIdToQuery},
								type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
							return data;
						});
};

// Searches for all the projects with a particular  projectId.
exports.searchByProjects = function(projectId) {
	var projectIdToQuery = projectId;
	return db.sequelize.query("SELECT" +
							   " FROM project p1" +
							   " WHERE p1.projectID = :projectId", 
							   {replacements: {projectId: projectIdToQuery},
								type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
								return data;
							 });
};

// Searches for all the projects with a particular categoryId.
exports.searchByCategories = function(categoryId) {
	var categoryIdToQuery = categoryId;
	return db.sequelize.query("SELECT *" +
							   " FROM project p1" +
							   " WHERE p1.categoryID = :categoryId", 
							   {replacements: {categoryId: categoryIdToQuery},
								type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
								return data;
							});
};

// Searches for all the projects with a particular statusId.
exports.searchByStatus = function(statusId) {
	var statusIdToQuery = statusId;
	return db.sequelize.query("SELECT " +
							   " FROM project p1" +
							   " WHERE p1.statusID = :statusId",
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
	return db.sequelize.query("SELECT p1.projectID, p1.userID, p1.statusID, p1.categoryID, p1.description, p1.title, p1.duration, p1.startDate" +
							   " FROM users u1, projects p1" +
							   " WHERE u1.userID = p1.userID AND" +
							   		 " p1.userId = :userId AND" +
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
	return db.sequelize.query("SELECT p1.projectID, p1.userID, p1.statusID, p1.categoryID, p1.description, p1.title, p1.duration, p1.startDate" +
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
	return db.sequelize.query("SELECT p1.description, p1.title, k1.words, u1.name, c1.name, p1.projectID, p1.url, SUM (d1.amount)" +
							   " FROM project p1, keywords k1, categories c1, users u1, donations d1" +
							   " WHERE p1.projectID = k1.projectID AND" + 
									  " p1.categoryID = c1.categoryID AND" +
									  " p1.userID = u1.userID AND" +
									  " u1.role = 'Entrepreneur' AND" + 
									  " d1.projectID = p1.projectID" +
									  " GROUP BY p1.projectID, u1.name, c1.name, p1.title, k1.words, p1.description", 
							   {type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
								return data;
							});
};

// Gives project with highest funding
exports.highestFunding = function() {
	return db.sequelize.query("SELECT p1.title" +
							   " FROM project p1, donations d1" +
							   " WHERE p1.projectID = d1.projectID" +
							   " GROUP BY d1.projectID" +
							   " HAVING MAX(d1.amount)",
							   {type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
							return data;
						});
};

// Gives all projects and their current funding
exports.allFunding = function() {
	return db.sequelize.query("SELECT p1.title, SUM(d1.amount)" +
							   " FROM project p1 LEFT OUTER JOIN donations d1 ON p1.projectID = d1.projectID" +
							   " GROUP BY d1.projectID",
							   {type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
							return data;
						});
};

// Function that is triggered when a new user is added
// Updates the userId in tablesId
exports.updateUserId = function(userId) {
	return db.sequelize.query("CREATE TRIGGER updateUserId AFTER INSERT ON users " +
								" FOR EACH STATEMENT" +
								" BEGIN " +
								" UPDATE tablesId SET userId = userId + 1 WHERE userId = userId;" +
								" END;",
								{type: db.sequelize.QueryTypes.UPDATE})
						.then((data) => {
							return data;
						});
}

// Function that is triggered when a new project is added
// Updates the projectId in tablesId
exports.updateProjectId = function() {
	return db.sequelize.query("CREATE TRIGGER updateProjectId AFTER INSERT ON project " +
								" FOR EACH STATEMENT" +
								" BEGIN " +
								" UPDATE tablesId SET projectId = projectId + 1 WHERE projectId = projectId;" +
								" END;",
								{type: db.sequelize.QueryTypes.UPDATE})
						.then((data) => {
							return data;
						});
}

// Function that is triggered when a new donation is added
// Updates the donationId in tablesId
exports.updateDonationId = function() {
	return db.sequelize.query("CREATE TRIGGER updateDonationId AFTER INSERT ON donations " +
								" FOR EACH STATEMENT" +
								" BEGIN " +
								" UPDATE tablesId SET donationId = donationId + 1 WHERE donationId = donationId;" +
								" END;",
								{type: db.sequelize.QueryTypes.UPDATE})
						.then((data) => {
							return data;
						});
}

exports.login = function(emailAddress, password) {
	var emailAddressToQuery = emailAddress;
	var passwordToQuery = password;
	return db.sequelize.query("SELECT u1.emailAddress, u1.password " + 
							   "FROM users u1 " +  
							   "WHERE u1.emailAddress = :emailAddress AND u1.password = :password", 
							   {replacements: {emailAddress: emailAddressToQuery, password: passwordToQuery},
								type: db.sequelize.QueryTypes.SELECT})
						.then((data) => {
							return data;
						});
}
