'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [{
        categoryid: '1',
        name: 'Technology'
    },
    {
        categoryid: '2',
        name: 'Food and Beverages'
    },
    {
        categoryid: '3',
        name: 'Clothing and Aparel'
    },
    {
        categoryid: '4',
        name: 'Art'
    },
    {
        categoryid: '5',
        name: 'Music'
    },
    {
        categoryid: '6',
        name: 'Publishing'
    },
    {
        categoryid: '7',
        name: 'Games'
    },
    {
        categoryid: '8',
        name: 'Sports and Fitness'
    },
    {
        categoryid: '9',
        name: 'Toys'
    },
    {
        categoryid: '10',
        name: 'Miscellaneous'
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};