module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE status(\
			statusID NUMERIC PRIMARY KEY,\
			statusWord VARCHAR(120))");
	},

	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE status");
	}
}