/* sample migration file that I created, will be changed later on */

module.exports = {
	up : (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE categories(\
	categoryID varchar(120) primary key,\
	name varchar(120) not null\
);");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE categories");
	}
}