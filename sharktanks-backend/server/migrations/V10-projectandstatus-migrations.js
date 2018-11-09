module.exports = {
	up: (queryInterface, Sequelize) => {
        queryInterface.sequelize.query("CREATE TABLE projectandstatus(\
            projectid NUMERIC PRIMARY KEY,\
            url VARCHAR(100),\
            description VARCHAR(500),\
            title VARCHAR(100) NOT NULL,\
            statusid NUMERIC REFERENCES status(statusid))");
	},

	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE projectandstatus");
	}
}