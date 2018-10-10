'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query("INSERT into categories(categoryID, name)\
    								VALUES(1, 'Technology')");
    queryInterface.sequelize.query("INSERT into categories(categoryID, name)\
                    VALUES(2, 'Food and Beverages')");
    queryInterface.sequelize.query("INSERT into categories(categoryID, name)\
                    VALUES(3, 'Clothing and Aparel')");
    queryInterface.sequelize.query("INSERT into categories(categoryID, name)\
                    VALUES(4, 'Art')");
    queryInterface.sequelize.query("INSERT into categories(categoryID, name)\
                    VALUES(5, 'Music')");
    queryInterface.sequelize.query("INSERT into categories(categoryID, name)\
                    VALUES(6, 'Publishing')");
    queryInterface.sequelize.query("INSERT into categories(categoryID, name)\
                    VALUES(7, 'Games')");
    queryInterface.sequelize.query("INSERT into categories(categoryID, name)\
                    VALUES(8, 'Sports and Fitness')");
    queryInterface.sequelize.query("INSERT into categories(categoryID, name)\
                    VALUES(9, 'Toys')");
    queryInterface.sequelize.query("INSERT into categories(categoryID, name)\
                    VALUES(10, 'Miscellaneous')");
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};