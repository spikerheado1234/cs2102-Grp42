/* sample migration file that I created, will be changed later on */

module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE keywords(\
			projectID NUMERIC REFERENCES project(projectID),\
			keywordID NUMERIC,\
			words VARCHAR(200),\
			PRIMARY KEY(projectID, keywordID))");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE keywords");
	}
}