module.exports = {
    up : (queryInterface, Sequelize) => {
        queryInterface.sequelize.query("CREATE TABLE keywords(\
            keywordID NUMERIC PRIMARY KEY,\
            words VARCHAR(500) NOT NULL\
        )");
    },
    down : (queryInterface) => {
        queryInterface.sequelize.query("DROP TABLE keywordsAndProjects");
    }
}