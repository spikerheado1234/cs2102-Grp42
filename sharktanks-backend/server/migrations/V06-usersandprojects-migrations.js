/* sample migration file that I created, will be changed later on */

module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query("CREATE TABLE usersandprojects(\
			projectid NUMERIC REFERENCES project(projectid),\
			userid NUMERIC REFERENCES users(userid),\
			PRIMARY KEY (projectid, userid))");
	},
	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE usersandprojects");
	}
}