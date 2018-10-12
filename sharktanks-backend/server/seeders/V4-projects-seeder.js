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
            url: '/img/projectImages/1.jpeg'
        },
        {
            projectid: '2', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '/img/projectImages/2.jpg'
        },
        {
            projectid: '3', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '/img/projectImages/3.jpeg'
        },
        {
            projectid: '4', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '/img/projectImages/4.jpeg'
        },
        {
            projectid: '5', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '/img/projectImages/5.jpg'
        },
        {
            projectid: '6', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '/img/projectImages/6.jpg'
        },
        {
            projectid: '7', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '/img/projectImages/7.jpeg'
        },
        {
            projectid: '8', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '/img/projectImages/8.jpg'
        },
        {
            projectid: '9', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quirky Fashion',
            url: '/img/projectImages/9.jpg'
        },
        {
            projectid: '10', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'Better Coffee',
            title: 'Coffee Man',
            url: '/img/projectImages/10.jpeg'
        },
        {
            projectid: '11', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'Pay by the slice.',
            title: 'Pizza God',
            url: '/img/projectImages/11.jpeg'
        },
        {
            projectid: '12', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'The fun game for evil pals.',
            title: 'Devil Hands',
            url: '/img/projectImages/12.jpeg'
        },
        {
            projectid: '13', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A game of planning',
            title: 'Minimum Viable Product',
            url: '/img/projectImages/13.jpg'
        },
        {
            projectid: '14', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A fun new way to learn about economics.',
            title: 'The Cap Table',
            url: '/img/projectImages/14.jpg'
        },
        {
            projectid: '15', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A taste of the real world.',
            title: 'Articles of Incorporation',
            url: '/img/projectImages/15.jpg'
        },
        {
            projectid: '16', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A novel for kids',
            title: 'Proof of Concept',
            url: '/img/projectImages/16.jpeg'
        },
        {
            projectid: '17', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'Fun projects for kids',
            title: 'Sand Hill Shuffle',
            url: '/img/projectImages/17.jpeg'
        },
        {
            projectid: '18', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'Like monopoly but more fun.',
            title: 'Bad Money',
            url: '/img/projectImages/18.jpg'
        },
        {
            projectid: '19', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'A chatbot exclusively for women',
            title: 'The Lady',
            url: '/img/projectImages/19.jpg'
        },
        {
            projectid: '20', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'A better way to organise your data',
            title: 'Server Space',
            url: '/img/projectImages/20.jpg'
        },
        {
            projectid: '21', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'Trust no one in this game',
            title: 'Homicide',
            url: '/img/projectImages/21.JPG'
        },
        {
            projectid: '22', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'Notes on how to pitch',
            title: 'Founder Friendly',
            url: '/img/projectImages/22.jpeg'
        },
        {
            projectid: '23', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A bagpack for programmers',
            title: 'Meinertzhagen Haversack',
            url: '/img/projectImages/23.jpg'
        },
        {
            projectid: '24', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A new bar concept.',
            title: 'The Empty Chair',
            url: '/img/projectImages/24.jpeg'
        },
        {
            projectid: '25', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'Services for engineers',
            title: 'To Build a Better Beta',
            url: '/img/projectImages/25.jpg'
        },
        {
            projectid: '26', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'Metadata Assistant',
            title: 'Daily Active Users',
            url: '/img/projectImages/26.jpeg'
        },
        {
            projectid: '27', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A clock for modern men',
            title: 'The Uptick',
            url: '/img/projectImages/27.jpg'
        },
        {
            projectid: '28', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'High quality, organic cotton clothes',
            title: 'Success Failure',
            url: '/img/projectImages/28.jpeg'
        },
        {
            projectid: '29', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'Your virtual lawyer assistant',
            title: 'Terms of Service',
            url: '/img/projectImages/29.jpg'
        },
        {
            projectid: '30', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '/img/projectImages/30.jpeg'
        },
        {
            projectid: '31', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'Help for start-ups',
            title: 'Intellectual Property',
            url: '/img/projectImages/31.jpeg'
        },
        {
            projectid: '32', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: '',
            title: 'Teambuilding Exercise',
            url: '/img/projectImages/32.jpg'
        },
        {
            projectid: '33', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '/img/projectImages/33.jpeg'
        },
        {
            projectid: '34', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A game for the bloodthirsty.',
            title: 'The Blood Boy',
            url: '/img/projectImages/34.jpg'
        },
        {
            projectid: '35', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery II',
            url: '/img/projectImages/35.jpg'
        },
        {
            projectid: '36', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion II',
            url: '/img/projectImages/36.jpg'
        },
        {
            projectid: '37', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'Online help for cheap.',
            title: 'Customer Services',
            url: '/img/projectImages/37.jpg'
        },
        {
            projectid: '38', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz II',
            url: '/img/projectImages/38.jpg'
        },
        {
            projectid: '39', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'An open online database of patents',
            title: 'The Patent Troll',
            url: '/img/projectImages/39.jpeg'
        },
        {
            projectid: '40', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'Rethinking error handling for clients.',
            title: 'Server Error',
            url: '/img/projectImages/40.png'
        },
        {
            projectid: '41', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better II',
            url: '/img/projectImages/41.jpeg'
        },
        {
            projectid: '42', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '/img/projectImages/42.jpeg'
        },
        {
            projectid: '43', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'Organic seeds for garden lovers.',
            title: 'Grow Fast or Die Slow',
            url: '/img/projectImages/43.jpg'
        },
        {
            projectid: '44', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery III',
            url: '/img/projectImages/44.jpg'
        },
        {
            projectid: '45', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A compass for travelers.',
            title: 'Reorientation',
            url: '/img/projectImages/45.jpg'
        },
        {
            projectid: '46', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'A role playing game for executives',
            title: 'Chief Operating Officer',
            url: '/img/projectImages/46.jpeg'
        },
        {
            projectid: '47', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'A magazine for the tech savvy.',
            title: 'Tech Evangelist',
            url: '/img/projectImages/47.jpg'
        },
        {
            projectid: '48', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'IOT sensors for cheap',
            title: 'Facial Recognition',
            url: '/img/projectImages/48.jpeg'
        },
        {
            projectid: '49', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'Your AI psychologist',
            title: 'Artificial Emotional Intelligence',
            url: '/img/projectImages/49.jpeg'
        },
        {
            projectid: '50', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'Launch your personal crypto-currency',
            title: 'Initial Coin Offering',
            url: '/img/projectImages/50.jpeg'
        },
        {
            projectid: '51', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '/img/projectImages/51.jpg'
        },
        {
            projectid: '52', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A tale of two lovers.',
            title: 'Fifty-One Percent',
            url: '/img/projectImages/52.jpg'
        },
        {
            projectid: '53', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '/img/projectImages/53.jpg'
        },
        {
            projectid: '54', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'Navigation for plebs.',
            title: 'Pilot',
            url: '/img/projectImages/54.jpg'
        },
        {
            projectid: '55', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'A new way to think about animals',
            title: 'Purple Giraffe',
            url: '/img/projectImages/55.jpg'
        },
        {
            projectid: '56', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'A guide to NYC',
            title: 'Sweet Taste of Liberty',
            url: '/img/projectImages/56.jpg'
        },
        {
            projectid: '57', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'Ultra luxury for everyone',
            title: 'Return of the Shirt',
            url: '/img/projectImages/57.jpg'
        },
        {
            projectid: '58', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new way to make pies',
            title: 'Slutty Pumpkin',
            url: '/img/projectImages/58.jpg'
        },
        {
            projectid: '59', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'Go on dates with other couples.',
            title: 'Matchmaker',
            url: '/img/projectImages/59.jpg'
        },
        {
            projectid: '60', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'Bitcoin with crypto-currency',
            title: 'The Duel',
            url: '/img/projectImages/60.jpg'
        },
        {
            projectid: '61', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'Fresh turkey delivered cheap.',
            title: 'Belly Full of Turkey',
            url: '/img/projectImages/61.jpg'
        },
        {
            projectid: '62', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '/img/projectImages/62.jpg'
        },
        {
            projectid: '63', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion',
            url: '/img/projectImages/63.jpg'
        },
        {
            projectid: '64', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'Pizzas with way too many pineapples.',
            title: 'The Pineapple Incident',
            url: '/img/projectImages/64.jpg'
        },
        {
            projectid: '65', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'Uber for limos.',
            title: 'The Limo',
            url: '/img/projectImages/65.jpg'
        },
        {
            projectid: '66', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'Meet your one true love',
            title: 'The Wedding',
            url: '/img/projectImages/66.jpg'
        },
        {
            projectid: '67', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'Electronic musical instruments',
            title: 'Drumroll, Please',
            url: '/img/projectImages/67.jpg'
        },
        {
            projectid: '68', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '/img/projectImages/68.jpg'
        },
        {
            projectid: '69', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '/img/projectImages/69.jpg'
        },
        {
            projectid: '70', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'Zips that never break',
            title: 'Zip, Zip, Zip',
            url: '/img/projectImages/70.jpg'
        },
        {
            projectid: '71', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '/img/projectImages/71.jpg'
        },
        {
            projectid: '72', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'The IDE for sweet people',
            title: 'Cupcake',
            url: '/img/projectImages/72.jpg'
        },
        {
            projectid: '73', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'A documentary about Rwanda.',
            title: 'Life Among the Gorillas',
            url: '/img/projectImages/73.jpg'
        },
        {
            projectid: '74', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'A better sleep reminder',
            title: 'Nothing Good Happens After 2 A.M',
            url: '/img/projectImages/74.jpg'
        },
        {
            projectid: '75', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'Law meets AR',
            title: 'Mary the Paralegal',
            url: '/img/projectImages/75.jpg'
        },
        {
            projectid: '76', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'Rent clothes cheaper.',
            title: 'Best Prom Ever',
            url: '/img/projectImages/76.jpg'
        },
        {
            projectid: '77', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'For the lactose intolerant.',
            title: 'Milk',
            url: '/img/projectImages/77.jpg'
        },
        {
            projectid: '78', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'A diary for motivation',
            title: 'Come On',
            url: '/img/projectImages/78.jpg'
        },
        {
            projectid: '79', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '/img/projectImages/79.jpg'
        },
        {
            projectid: '80', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'Re-thinking GPS',
            title: 'Where Were We?',
            url: '/img/projectImages/80.jpg'
        },
        {
            projectid: '81', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'A kids drawing book',
            title: 'The Scorpion and the Toad',
            url: '/img/projectImages/81.jpg'
        },
        {
            projectid: '82', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'Restaurants serving all day breakfast.',
            title: 'Brunch',
            url: '/img/projectImages/82.jpg'
        },
        {
            projectid: '83', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'Move for cheaper.',
            title: 'Moving Day',
            url: '/img/projectImages/83.jpg'
        },
        {
            projectid: '84', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'Boys like to have fun.',
            title: 'Bachelor Party',
            url: '/img/projectImages/84.jpg'
        },
        {
            projectid: '85', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '/img/projectImages/85.jpg'
        },
        {
            projectid: '86', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'Exploding friendships',
            title: 'Showdown',
            url: '/img/projectImages/86.jpg'
        },
        {
            projectid: '87', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'Reducing waste',
            title: 'Something borrowed',
            url: '/img/projectImages/87.jpg'
        },
        {
            projectid: '88', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'Diving lessons for kids',
            title: 'Something blue',
            url: '/img/projectImages/88.jpg'
        },
        {
            projectid: '89', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'Track your online purchases',
            title: 'Wait for it',
            url: '/img/projectImages/89.jpg'
        },
        {
            projectid: '90', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'AR meets dancing',
            title: 'Dance with you',
            url: '/img/projectImages/90.jpg'
        },
        {
            projectid: '91', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'Date ideas that include your annoying best friend.',
            title: 'Third wheel',
            url: '/img/projectImages/91.jpg'
        },
        {
            projectid: '92', 
            userid: '2',
            statusid: '2',
            categoryid: '1',
            description: 'Using AI to filter out spoilers',
            title: 'Spoiler Alert',
            url: '/img/projectImages/92.jpg'
        },
        {
            projectid: '93', 
            userid: '3',
            statusid: '3',
            categoryid: '1',
            description: 'Better than the golden rule',
            title: 'The Platinum Rule',
            url: '/img/projectImages/93.jpg'
        },
        {
            projectid: '94', 
            userid: '4',
            statusid: '1',
            categoryid: '2',
            description: 'YOLO',
            title: 'No Tomorrow',
            url: '/img/projectImages/94.jpg'
        },
        {
            projectid: '95', 
            userid: '5',
            statusid: '2',
            categoryid: '2',
            description: 'Massages for couples.',
            title: 'Ten Sessions',
            url: '/img/projectImages/95.jpg'
        },
        {
            projectid: '96', 
            userid: '6',
            statusid: '3',
            categoryid: '2',
            description: 'Secret recipes for great food',
            title: 'Foodiculous',
            url: '/img/projectImages/96.jpg'
        },
        {
            projectid: '97', 
            userid: '7',
            statusid: '1',
            categoryid: '3',
            description: 'Book rides, pay by bitcoin',
            title: 'Blocktaxi',
            url: '/img/projectImages/97.jpg'
        },
        {
            projectid: '98', 
            userid: '8',
            statusid: '2',
            categoryid: '3',
            description: 'AI meets text editors.',
            title: 'The Bracket',
            url: '/img/projectImages/98.jpg'
        },
        {
            projectid: '99', 
            userid: '9',
            statusid: '3',
            categoryid: '3',
            description: 'Rent farm animals for parties.',
            title: 'The Goat',
            url: '/img/projectImages/99.jpg'
        },
        {
            projectid: '100', 
            userid: '1',
            statusid: '1',
            categoryid: '1',
            description: 'Better believe it.',
            title: 'Miracles',
            url: '/img/projectImages/100.jpg'
        }
        ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project', null, {});
  }
};