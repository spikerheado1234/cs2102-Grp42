module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE users(\
			userid NUMERIC PRIMARY KEY,\
			name VARCHAR(100),\
			emailaddress VARCHAR(100),\
			role VARCHAR(20),\
			password VARCHAR(100))");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE users");
	}
}