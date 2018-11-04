'use strict';

module.exports = {
  // TODO Add a lot more donations.
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('donations', [{
          donationid: 1,
          projectid: 1,
          userid: 11,
          amount: 100
        },
        {
          donationid: 2,
          projectid: 2,
          userid: 12,
          amount: 200
        },
        {
          donationid: 3,
          projectid: 3,
          userid: 13,
          amount: 300
        },
        {
          donationid: 4,
          projectid: 4,
          userid: 14,
          amount: 400
        },
        {
          donationid: 5,
          projectid: 5,
          userid: 15,
          amount: 500
        },
        {
          donationid: 6,
          projectid: 6,
          userid: 16,
          amount: 600
        },
        {
          donationid: 7,
          projectid: 7,
          userid: 17,
          amount: 700
        },
        {
          donationid: 8,
          projectid: 8,
          userid: 18,
          amount: 800
        },
        {
          donationid: 9,
          projectid: 9,
          userid: 19,
          amount: 900
        }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('donations', null, {});
  }
};