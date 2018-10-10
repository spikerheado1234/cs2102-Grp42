'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('ahangupta.96@gmail.com, 1, 'Ahan Gupta', 'Entrepreneur', 'xyz')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('johndoe@gmail.com, 2, 'John Doe', 'Entrepreneur', 'abc')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('johnmary@gmail.com, 3, 'John Mary', 'Entrepreneur', 'abcd')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('mary@gmail.com, 4, 'Mary Poppins', 'Entrepreneur', 'abcde')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('bobthebuilder@gmail.com, 5, 'Bob the Builder', 'Entrepreneur', 'abcdef')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('josemourinho@gmail.com, 6, 'Jose Mourinho', 'Entrepreneur', 'abcdefg')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('lionelmessi@gmail.com, 7, 'Lionel Messi', 'Entrepreneur', 'abcdefgh')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('kevin@gmail.com, 8, 'Kevin De Bruyne', 'Entrepreneur', 'abcdefghi')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('guardiola@gmail.com, 9, 'Pep Guardiola', 'Entrepreneur', 'abcdefghij')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('edenhazard@gmail.com, 10, 'Eden Hazard', 'Entrepreneur', 'abcdefghijk')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('davidbeckham@gmail.com, 11, 'David Beckham', 'Investor', 'abcdefghijkl')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('jefferson@gmail.com, 12, 'Jefferson', 'Investor', 'abcdefghijklm')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('harsh@gmail.com, 13, 'Harsh', 'Investor', 'abcdefghijklmn')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('suyash@gmail.com, 14, 'Suyash', 'Investor', 'abcdefghijklmno')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('alex@gmail.com, 15, 'Alex', 'Investor', 'abcdefghijklmnop')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('oliver@gmail.com, 16, 'Oliver', 'Investor', 'abcdefghijklmnopq')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('jack@gmail.com, 17, 'Jack', 'Investor', 'abcdefghijklmnopqr')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('harry@gmail.com, 18, 'Harry', 'Investor', 'abcdefghijklmnopqrs')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('jacob@gmail.com, 19, 'Jacob', 'Investor', 'abcdefghijklmnopqrst')");
    queryInterface.sequelize.query("INSERT users(emailAddress, userID, name, role, password)\
                                   VALUES('james@gmail.com, 20, 'James', 'Investor', 'abcdefghijklmnopqrstu')");
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};