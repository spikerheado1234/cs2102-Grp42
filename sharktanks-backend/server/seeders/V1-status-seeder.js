'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query("INSERT into STATUS(statusID, statusWord)\
    								VALUES(1, 'Not Funded')");
    queryInterface.sequelize.query("INSERT into STATUS(statusID, statusWord)\
    								VALUES(2, 'In progress of Funding')");
    queryInterface.sequelize.query("INSERT into STATUS(statusID, statusWord)\
    								VALUES(2, 'Funded')");
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('status', null, {});
  }
};