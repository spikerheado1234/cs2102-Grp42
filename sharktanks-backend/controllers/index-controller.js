var sequelize = require("../server/models/index.js");

/* For pre-alpha demonstration only, to be deleted afterwards. */
exports.dataList = function() {
	var data = sequelize.db.sequelize.query("SELECT * FROM status");
	console.log(data);
	return data;
};

exports.dataPost = function(statusId, statusWord) {
	sequelize.db.sequelize.query("INSERT INTO status(statusId, statusWord)" 
			+ " VALUES(" + statusID + ", " + statusWord + ")").then(console.log("done"));
};