'use strict';

module.exports = {
  // TODO Add a lot more donations.
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('keywords', [{
          projectid: '1',
          keywordid: '1',
          words: 'artificial intelligence'
        },
        {
          projectid: '1',
          keywordid: '2',
          words: 'chatbots'
        },
        {
          projectid: '2',
          keywordid: '3',
          words: 'augmented reality'
        },
        {
          projectid: '3',
          keywordid: '4',
          words: 'crypto-currency'
        },
        {
          projectid: '4',
          keywordid: '5',
          words: 'food-franchise'
        },
        {
          projectid: '5',
          keywordid: '5',
          words: 'food-franchise'
        },
        {
          projectid: '6',
          keywordid: '6',
          words: 'food-delivery'
        },
        {
          projectid: '7',
          keywordid: '7',
          words: 'apparel store'
        },
        {
          projectid: '8',
          keywordid: '8',
          words: 'home apparel delivery'
        },
        {
          projectid: '9',
          keywordid: '9',
          words: 'fashion design'
        }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('keywords', null, {});
  }
};