/* sample migration file that I created, will be changed later on */

module.exports = {
	up : (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE keywords(\
	projectID varchar(120) references project(projectID),\
	keywordID varchar(120) references users(userID),\
	words varchar(120) primary key\
);");\
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE donations");
	}
}