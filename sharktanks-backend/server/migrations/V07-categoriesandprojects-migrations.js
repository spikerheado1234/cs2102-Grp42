module.exports = {
	up: (queryInterface, Sequelize) => {
        queryInterface.sequelize.query("CREATE TABLE categoriesandprojects(\
            url VARCHAR(500),\
            projectid NUMERIC PRIMARY KEY,\
            description VARCHAR(500),\
            title VARCHAR(500) NOT NULL,\
            categoryid NUMERIC REFERENCES categories(categoryid))");
	},

	down: (queryInterface) => {
		queryInterface.sequelize.query("DROP TABLE categoriesandprojects");
	}
}