/* sample migration file that I created, will be changed later on */

module.exports = {
	up : (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE keywords(\
			projectID VARCHAR(120) REFERENCES project(projectID),\
			keywordID VARCHAR(120) REFERENCES users(userID),\
			words VARCHAR(120) PRIMARY KEY)");\
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE donations");
	}
}