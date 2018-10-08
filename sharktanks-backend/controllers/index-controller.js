var db = require("../server/models/index.js");

/* For pre-alpha demonstration only, to be deleted afterwards. */
exports.dataList = function(statusId) {
	return db.sequelize.query("SELECT statusWord FROM status LIMIT 1",
							{ type: db.sequelize.QueryTypes.SELECT })
							.then(status => {
								return status;
							});
};

exports.dataPost = function(statusId, statusWord) {
	console.log(statusId);
	db.sequelize.query("INSERT INTO status(statusId, statusWord)" 
		+ " VALUES(" + statusId + ", " + "'" + statusWord + "'" + ")");
};