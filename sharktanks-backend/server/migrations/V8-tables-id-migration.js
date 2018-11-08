module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.sequelize.query("CREATE TABLE tablesID(\
            userID NUMERIC PRIMARY KEY,\
            projectID NUMERIC,\
            donationID NUMERIC,\
            keywordID NUMERIC)");
    },
    down: queryInterface => {
        queryInterface.sequelize.query("DROP TABLE tablesID");
    }
}