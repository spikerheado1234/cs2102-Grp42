'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // TODO must add a lot more projects.
    return queryInterface.bulkInsert('project', [{
            projectid: '1', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'An AI chatbot to distrupt fake news.',
            title: 'AI Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '2', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '3', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '4', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '5', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '6', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '7', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '8', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '9', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion',
            url: '../../../../Resources/projectImages/default.jpg'
        }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project', null, {});
  }
};