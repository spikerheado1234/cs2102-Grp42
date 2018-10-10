'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // TODO must add a lot more projects.
    var createdAt = Sequelize.DATE;
    queryInterface.sequelize.query("INSERT into projects(projectID, userID, statusID, categoryID, description, title, startdate)\
    								VALUES(1, 1, 1, 1, 'An AI chatbot to distrupt fake news.', :date)", 
                                    {replacements: {date: createdAt}});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects', null, {});
  }
};