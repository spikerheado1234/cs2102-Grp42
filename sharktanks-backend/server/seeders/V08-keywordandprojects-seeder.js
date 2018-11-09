'use strict';

module.exports = {
  // TODO Add a lot more donations.
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('keywordandprojects', [{
          projectid: 1,
          keywordid: 1,
        },
        {
          projectid: 1,
          keywordid: 2,
        },
        {
          projectid: 2,
          keywordid: 3,
        },
        {
          projectid: 3,
          keywordid: 4,
        },
        {
          projectid: 4,
          keywordid: 5,
        },
        {
          projectid: 5,
          keywordid: 5,
        },
        {
          projectid: 6,
          keywordid: 6,
        },
        {
          projectid: 7,
          keywordid: 7,
        },
        {
          projectid: 8,
          keywordid: 8,
        },
        {
          projectid: 9,
          keywordid: 9,
        },
        {
          projectid: 10,
          keywordid: 10,
        }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('keywordandprojects', null, {});
  }
};