/* sample migration file that I created, will be changed later on */

module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE categories(\
			categoryid NUMERIC PRIMARY KEY,\
			name varchar(50) NOT NULL)");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE categories");
	}
}

//allows password column to be encrypted (line 12)