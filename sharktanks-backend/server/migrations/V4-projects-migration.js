module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE project(\
			projectID VARCHAR(120) PRIMARY KEY,\
			userID VARCHAR(120) REFERENCES users(userID),\
			statusID VARCHAR(120) REFERENCES status(statusID),\
			categoryID VARCHAR(120) REFERENCES categories(categoryID), \
			description VARCHAR(500),\
			title VARCHAR(500) NOT NULL,\
			duration NUMERIC,\
			startdate DATE)");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE project");
	}
}