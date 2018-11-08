module.exports = {
    up : (queryInterface, Sequelize) => {
        queryInterface.sequelize.query("CREATE TABLE keywords(\
            keyWordID NUMERIC PRIMARY KEY,\
            words VARCHAR(500) NOT NULL)")
        // .then((data) => {
        //     queryInterface.sequelize.query("CREATE TRIGGER updatekeywordid AFTER INSERT ON keywords" +
        //     " FOR EACH ROW" +
        //     " BEGIN" +
        //     " UPDATE tablesid SET keywordid = keywordid + 1 WHERE keywordid = keywordid;" +
        //     " END;")
        // });
    },
    down : (queryInterface) => {
        queryInterface.sequelize.query("DROP TABLE keywords");
    }
}