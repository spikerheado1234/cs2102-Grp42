'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      emailaddress: 'ahangupta.96@gmail.com',
      userid: '1',
      name: 'Ahan Gupta',
      role: 'Entrepreneur',
      password: 'xyz' 
    },
    {
      emailaddress: 'johndoe@gmail.com',
      userid: '2',
      name: 'John Doe',
      role: 'Entrepreneur',
      password: 'abc' 
    },
    {
      emailaddress: 'johnmary@gmail.com',
      userid: '3',
      name: 'John Mary',
      role: 'Entrepreneur',
      password: 'abcd' 
    },
    {
      emailaddress: 'mary@gmail.com',
      userid: '4',
      name: 'Mary Poppins',
      role: 'Entrepreneur',
      password: 'abcde' 
    },
    {
      emailaddress: 'bobthebuilder@gmail.com',
      userid: '5',
      name: 'Bob the Builder',
      role: 'Entrepreneur',
      password: 'abcdef' 
    },
    {
      emailaddress: 'josemourinho@gmail.com',
      userid: '6',
      name: 'Jose Mourinho',
      role: 'Entrepreneur',
      password: 'abcdefg' 
    },
    {
      emailaddress: 'lionelmessi@gmail.com',
      userid: '7',
      name: 'Lionel Messi',
      role: 'Entrepreneur',
      password: 'abcdefgh' 
    },
    {
      emailaddress: 'edenhazard@gmail.com',
      userid: '8',
      name: 'Eden Hazard',
      role: 'Entrepreneur',
      password: 'abcdefghi' 
    },
    {
      emailaddress: 'salah@gmail.com',
      userid: '9',
      name: 'Salah',
      role: 'Entrepreneur',
      password: 'abcdefghij' 
    },
    {
      emailaddress: 'kevin@gmail.com',
      userid: '10',
      name: 'Kevin De Bruyne',
      role: 'Entrepreneur',
      password: 'abcdefghij' 
    },
    {
      emailaddress: 'guardiola@gmail.com',
      userid: '11',
      name: 'Pep Guardiola',
      role: 'Investor',
      password: 'abcdefghijk' 
    },
    {
      emailaddress: 'davidbeckham@gmail.com',
      userid: '12',
      name: 'David Beckham',
      role: 'Investor',
      password: 'abcdefghijkl' 
    },
    {
      emailaddress: 'jefferson@gmail.com',
      userid: '13',
      name: 'Jefferson',
      role: 'Investor',
      password: 'abcdefghijklm' 
    },
    {
      emailaddress: 'harsh@gmail.com',
      userid: '14',
      name: 'Harsh',
      role: 'Investor',
      password: 'abcdefghijklmm' 
    },
    {
      emailaddress: 'suyash@gmail.com',
      userid: '15',
      name: 'Suyash',
      role: 'Investor',
      password: 'abcdefghijklmno' 
    },
    {
      emailaddress: 'alex@gmail.com',
      userid: '16',
      name: 'Alex',
      role: 'Investor',
      password: 'abcdefghijklmnop' 
    },
    {
      emailaddress: 'oliver@gmail.com',
      userid: '17',
      name: 'Oliver',
      role: 'Investor',
      password: 'abcdefghijklmnopq' 
    },
    {
      emailaddress: 'jack@gmail.com',
      userid: '18',
      name: 'Jack',
      role: 'Investor',
      password: 'abcdefghijklmnopqr' 
    },
    {
      emailaddress: 'harry@gmail.com',
      userid: '19',
      name: 'Harry',
      role: 'Investor',
      password: 'abcdefghijklmnopqrs' 
    },
    {
      emailaddress: 'jacob@gmail.com',
      userid: '20',
      name: 'Jacob',
      role: 'Investor',
      password: 'abcdefghijklmnopqrst' 
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};