'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usersandprojects', [{
          projectid: 1,
          userid: 1,
        },
        {
          projectid: 1,
          userid: 2,
        },
        {
          projectid: 2,
          userid: 3,
        },
        {
          projectid: 3,
          userid: 4,
        },
        {
          projectid: 4,
          userid: 5,
        },
        {
          projectid: 5,
          userid: 5,
        },
        {
          projectid: 6,
          userid: 6,
        },
        {
          projectid: 7,
          userid: 7,
        },
        {
          projectid: 8,
          userid: 8,
        },
        {
          projectid: 9,
          userid: 2,
        },
        {
          projectid: 10,
          userid: 3,
        },
        {
          projectid: 11,
          userid: 2,
        },
        {
          projectid: 12,
          userid: 3,
        },
        {
          projectid: 13,
          userid: 4,
        },
        {
          projectid: 14,
          userid: 5,
        },
        {
          projectid: 15,
          userid: 5,
        },
        {
          projectid: 16,
          userid: 6,
        },
        {
          projectid: 17,
          userid: 7,
        },
        {
          projectid: 18,
          userid: 8,
        },
        {
          projectid: 19,
          userid: 9,
        },
        {
          projectid: 20,
          userid: 10,
        }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usersandprojects', null, {});
  }
};