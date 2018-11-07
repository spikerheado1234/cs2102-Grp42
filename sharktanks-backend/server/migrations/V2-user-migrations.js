/* sample migration file that I created, will be changed later on */

module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE users(\
			emailAddress varchar(120) unique NOT NULL,\
			userID NUMERIC PRIMARY KEY,\
			name varchar(120) NOT NULL,\
			role varchar(120),\
			password varchar(120) not null)"),
		queryInterface.sequelize.query(
			"CREATE EXTENSION pgcrypto;"
			)
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE users");
	}
}

//allows password column to be encrypted (line 12)