'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('keywords', [{
          keywordid: 1,
          words: 'artificial intelligence'
        },
        {
          keywordid: 2,
          words: 'chatbots'
        },
        {
          keywordid: 3,
          words: 'augmented reality'
        },
        {
          keywordid: 4,
          words: 'crypto-currency'
        },
        {
          keywordid: 5,
          words: 'food-franchise'
        },
        {
          keywordid: 6,
          words: 'food-franchise'
        },
        {
          keywordid: 7,
          words: 'food-delivery'
        },
        {
          keywordid: 8,
          words: 'apparel store'
        },
        {
          keywordid: 9,
          words: 'home apparel delivery'
        },
        {
          keywordid: 10,
          words: 'fashion design'
        }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('keywords', null, {});
  }
};