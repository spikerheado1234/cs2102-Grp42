module.exports = {
    up : (queryInterface, Sequelize) => {
        queryInterface.sequelize.query("CREATE TABLE keywords(\
            keyWordID NUMERIC PRIMARY KEY,\
            words VARCHAR(500) NOT NULL\
        )");
    },
    down : (queryInterface) => {
        queryInterface.sequelize.query("DROP TABLE keywords");
    }
}