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
        },
        {
            projectid: '10', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'An AI chatbot to distrupt fake news.',
            title: 'AI Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '11', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '12', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '13', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '14', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '15', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '16', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '17', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '18', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '19', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'An AI chatbot to distrupt fake news.',
            title: 'AI Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '20', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '21', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '22', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '23', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '24', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '25', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '26', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '27', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '28', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'An AI chatbot to distrupt fake news.',
            title: 'AI Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '29', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '30', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '31', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '32', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '33', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '34', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '35', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '36', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '37', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'An AI chatbot to distrupt fake news.',
            title: 'AI Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '38', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '39', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '40', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '41', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '42', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '43', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '44', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '45', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '46', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'An AI chatbot to distrupt fake news.',
            title: 'AI Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '47', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '48', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '49', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '50', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '51', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '52', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '53', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '54', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '55', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'An AI chatbot to distrupt fake news.',
            title: 'AI Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '56', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '57', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '58', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '59', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '60', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '61', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '62', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '63', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '64', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'An AI chatbot to distrupt fake news.',
            title: 'AI Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '65', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '66', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '67', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '68', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '69', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '70', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '71', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '72', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '73', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'An AI chatbot to distrupt fake news.',
            title: 'AI Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '74', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '75', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '76', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '77', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '78', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '79', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '80', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '81', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '82', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'An AI chatbot to distrupt fake news.',
            title: 'AI Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '83', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '84', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '85', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '86', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '87', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '88', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '89', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '90', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '91', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'An AI chatbot to distrupt fake news.',
            title: 'AI Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '92', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '93', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '94', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '95', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '96', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '97', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '98', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '99', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion',
            url: '../../../../Resources/projectImages/default.jpg'
        },
        {
            projectid: '100', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'An AI chatbot to distrupt fake news 2.',
            title: 'AI Hype Lordz',
            url: '../../../../Resources/projectImages/default.jpg'
        }
        ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project', null, {});
  }
};