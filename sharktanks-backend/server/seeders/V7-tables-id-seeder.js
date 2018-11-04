module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('tablesID', [{
        userID: '20',
        projectID: '100',
        donationID: '9',
        keywordID: '9'
      }], {});
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('status', null, {});
    }
  };