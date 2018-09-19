module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE project(\
			projectID varchar(120) NOT NULL,\
			userID varchar(120) REFERENCES users(userID),\
			statusID varchar(120) REFERENCES status(statusID),\
			description varchar(500),\
			title varchar(500) NOT NULL,\
			duration INTERVAL,\
			startdate TIMESTAMP,\
   			PRIMARY KEY(projectID))");
	}
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE project");
	}
}