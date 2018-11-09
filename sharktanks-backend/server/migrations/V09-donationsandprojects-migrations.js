module.exports = {
	up: (queryInterface, Sequelize) => {
        queryInterface.sequelize.query("CREATE TABLE donationsandprojects(\
            donationid NUMERIC PRIMARY KEY,\
            amount NUMERIC NOT NULL,\
            userid NUMERIC REFERENCES users(userid),\
            projectid NUMERIC REFERENCES project(projectid))");
	},

	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE donationsandprojects");
	}
}