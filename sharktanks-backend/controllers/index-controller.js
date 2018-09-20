var db = require("../server/models/index.js");

/* For pre-alpha demonstration only, to be deleted afterwards. */
exports.dataList = function() {
	return db.sequelize.query("SELECT * FROM status LIMIT 1",
							{ type: db.sequelize.QueryTypes.SELECT })
							.then(status => {
								return status;
							});
};

exports.dataPost = function(statusId, statusWord) {
	db.sequelize.query("INSERT INTO status(statusId, statusWord)" 
		+ " VALUES(" + statusID + ", " + statusWord + ")");
};