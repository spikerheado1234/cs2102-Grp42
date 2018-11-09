'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('status', [{
      statusid: 1,
      statusword: 'Not Funded'
    },
    {
      statusid: 2,
      statusword: 'In Progress of Funding'
    },
    {
      statusid: 3,
      statusword: 'Funded'
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('status', null, {});
  }
};