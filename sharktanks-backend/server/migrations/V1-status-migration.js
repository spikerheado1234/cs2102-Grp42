module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE status(\
			statusID VARCHAR(120) PRIMARY KEY,\
			statusWord VARCHAR(120))");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE status");
	}
}