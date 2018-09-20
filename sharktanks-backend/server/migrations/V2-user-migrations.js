/* sample migration file that I created, will be changed later on */

module.exports = {
	up : (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE users(\
			emailAddress varchar(120) unique NOT NULL,\
			userID varchar(120) PRIMARY KEY,\
			name varchar(120) NOT NULL,\
			role varchar(120),\
			password varchar(120) not null)");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE users");
	}
}