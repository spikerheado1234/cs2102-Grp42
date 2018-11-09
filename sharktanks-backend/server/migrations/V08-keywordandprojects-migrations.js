module.exports = {
	up: (queryInterface, Sequelize) => {
        queryInterface.sequelize.query("CREATE TABLE keywordandprojects(\
            projectid NUMERIC REFERENCES project(projectid),\
            keywordid NUMERIC REFERENCES keywords(keywordid),\
            PRIMARY KEY(projectid, keywordid))");
	},

	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE keywordandprojects");
	}
}