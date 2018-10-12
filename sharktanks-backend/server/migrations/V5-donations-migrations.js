/* sample migration file that I created, will be changed later on */

module.exports = {
	up : (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE donations(\
			donationID NUMERIC(120) PRIMARY KEY,\
			projectID VARCHAR(120) REFERENCES project(projectID),\
			userID VARCHAR(120) REFERENCES users(userID),\
			amount NUMERIC NOT NULL)");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE donations");
	}
}