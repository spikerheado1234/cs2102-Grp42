module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('tablesid', [{
        userid: 20,
        projectid: 100,
        donationid: 9,
        keywordid: 10
      }], {});
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('status', null, {});
    }
  };