/* sample migration file that I created, will be changed later on */

module.exports = {
	up : (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE donations(\
	donationID varchar(120) primary key,\
	projectID varchar(120) references project(projectID),\
	userID varchar(120) references users(userID),\
	amount varchar(120) not null\
);");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE donations");
	}
}