/* sample migration file that I created, will be changed later on */

module.exports = {
	up : (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE categories(\
			categoryID VARCHAR(120) PRIMARY KEY,\
			name VARCHAR(120) NOT NULL)");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE categories");
	}
}