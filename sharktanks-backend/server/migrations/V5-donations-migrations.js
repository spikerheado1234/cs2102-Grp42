/* sample migration file that I created, will be changed later on */

module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE donations(\
			donationID NUMERIC PRIMARY KEY,\
			projectID NUMERIC REFERENCES project(projectID),\
			userID NUMERIC REFERENCES users(userID),\
			amount NUMERIC NOT NULL)");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE donations");
	}
}