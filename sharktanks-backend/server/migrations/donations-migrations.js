/* sample migration file that I created, will be changed later on */

module.exports = {
	up : (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE donations(\
			donationID VARCHAR(120) PRIMARY KEY,\
			projectID VARCHAR(120) REFERENCES project(projectID),\
			userID VARCHAR(120) REFERENCES users(userID),\
			amount VARCHAR(120) NOT NULL)");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE donations");
	}
}