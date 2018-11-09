module.exports = {
    up : (queryInterface, Sequelize) => {
        queryInterface.sequelize.query("CREATE TABLE status(\
            statusid NUMERIC PRIMARY KEY,\
            statusword VARCHAR(500) NOT NULL)");
    },
    down : (queryInterface) => {
        queryInterface.sequelize.query("DROP TABLE status");
    }
}