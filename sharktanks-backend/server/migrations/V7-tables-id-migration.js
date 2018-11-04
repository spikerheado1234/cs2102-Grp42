module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.sequelize.query("CREATE TABLE tablesID (\
            userID VARCHAR(120) REFERENCES users(userID),\
            projectID VARCHAR(120) REFERENCES project(projectID),\
            categoryID VARCHAR(120) REFERENCES categories(categoryID),\
            donationID VARCHAR(120) REFERENCES donations(donationID),\
            keywordID VARCHAR(120) REFERENCES keywords(keywordID)\
            PRIMARY KEY(userID, projectID, categoryID, donationID, keywordID)");
    },
    down: queryInterface => {
        queryInterface.sequelize.query("DROP TABLE tablesID");
    }
}