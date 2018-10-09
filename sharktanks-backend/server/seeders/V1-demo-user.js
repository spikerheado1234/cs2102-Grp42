'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query("insert into users values('testing@testing.com',\
      'testuser','tester1','testrole',crypt('qqqqqq', gen_salt('md5')))");
  }, //just add mroe queries in this format to populate db

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

