module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE project(\
			projectID NUMERIC PRIMARY KEY,\
			userID NUMERIC REFERENCES users(userID),\
			statusID NUMERIC REFERENCES status(statusID),\
			categoryID NUMERIC REFERENCES categories(categoryID), \
			description VARCHAR(500),\
			title VARCHAR(500) NOT NULL,\
			duration NUMERIC,\
			startdate DATE,\
			url VARCHAR(500)\
			)");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE project");
	}
}