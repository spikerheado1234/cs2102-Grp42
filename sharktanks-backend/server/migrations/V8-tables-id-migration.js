module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.sequelize.query("CREATE TABLE tablesID(\
            userID NUMERIC,\
            projectID NUMERIC,\
            donationID NUMERIC,\
            keywordID NUMERIC,\
            PRIMARY KEY(userID, projectID, donationID, keywordID))");
    },
    down: queryInterface => {
        queryInterface.sequelize.query("DROP TABLE tablesID");
    }
}