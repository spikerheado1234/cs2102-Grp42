/* sample migration file that I created, will be changed later on */

module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE project(\
			url VARCHAR(500),\
			projectid NUMERIC PRIMARY KEY,\
			description VARCHAR(500),\
			title VARCHAR(50) NOT NULL)");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE project");
	}
}