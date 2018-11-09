'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // TODO must add a lot more projects.
    return queryInterface.bulkInsert('projectandstatus', [{
            projectid: 1, 
            description: 'An AI chatbot to distrupt fake news.',
            title: 'AI Hype Lordz',
            url: '/img/projectImages/1.jpeg',
            statusid: 1
        },
        {
            projectid: 2, 
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz',
            url: '/img/projectImages/2.jpg',
            statusid: 1
        },
        {
            projectid: 3, 
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '/img/projectImages/3.jpeg',
            statusid: 1
        },
        {
            projectid: 4, 
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '/img/projectImages/4.jpeg',
            statusid: 1
        },
        {
            projectid: 5, 
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better',
            url: '/img/projectImages/5.jpg',
            statusid: 1
        },
        {
            projectid: 6, 
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '/img/projectImages/6.jpg',
            statusid: 1
        },
        {
            projectid: 7, 
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '/img/projectImages/7.jpeg',
            statusid: 1
        },
        {
            projectid: 8, 
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery',
            url: '/img/projectImages/8.jpg',
            statusid: 1
        },
        {
            projectid: 9, 
            description: 'A quirky fashion designer outlet.',
            title: 'Quirky Fashion',
            url: '/img/projectImages/9.jpg',
            statusid: 1
        },
        {
            projectid: 10, 
            description: 'Better Coffee',
            title: 'Coffee Man',
            url: '/img/projectImages/10.jpeg',
            statusid: 1
        },
        {
            projectid: 11, 
            description: 'Pay by the slice.',
            title: 'Pizza God',
            url: '/img/projectImages/11.jpeg',
            statusid: 1
        },
        {
            projectid: 12, 
            description: 'The fun game for evil pals.',
            title: 'Devil Hands',
            url: '/img/projectImages/12.jpeg',
            statusid: 1
        },
        {
            projectid: 13, 
            description: 'A game of planning',
            title: 'Minimum Viable Product',
            url: '/img/projectImages/13.jpg',
            statusid: 1
        },
        {
            projectid: 14, 
            description: 'A fun new way to learn about economics.',
            title: 'The Cap Table',
            url: '/img/projectImages/14.jpg',
            statusid: 1
        },
        {
            projectid: 15, 
            description: 'A taste of the real world.',
            title: 'Articles of Incorporation',
            url: '/img/projectImages/15.jpg',
            statusid: 1
        },
        {
            projectid: 16, 
            description: 'A novel for kids',
            title: 'Proof of Concept',
            url: '/img/projectImages/16.jpeg',
            statusid: 1
        },
        {
            projectid: 17, 
            description: 'Fun projects for kids',
            title: 'Sand Hill Shuffle',
            url: '/img/projectImages/17.jpeg',
            statusid: 1
        },
        {
            projectid: 18, 
            description: 'Like monopoly but more fun.',
            title: 'Bad Money',
            url: '/img/projectImages/18.jpg',
            statusid: 1
        },
        {
            projectid: 19, 
            description: 'A chatbot exclusively for women',
            title: 'The Lady',
            url: '/img/projectImages/19.jpg',
            statusid: 1
        },
        {
            projectid: 20, 
            description: 'A better way to organise your data',
            title: 'Server Space',
            url: '/img/projectImages/20.jpg',
            statusid: 1
        },
        {
            projectid: 21, 
            description: 'Trust no one in this game',
            title: 'Homicide',
            url: '/img/projectImages/21.jpg',
            statusid: 1
        },
        {
            projectid: 22, 
            description: 'Notes on how to pitch',
            title: 'Founder Friendly',
            url: '/img/projectImages/22.jpeg',
            statusid: 1
        },
        {
            projectid: 23, 
            description: 'A bagpack for programmers',
            title: 'Meinertzhagen Haversack',
            url: '/img/projectImages/23.jpg',
            statusid: 1
        },
        {
            projectid: 24, 
            description: 'A new bar concept.',
            title: 'The Empty Chair',
            url: '/img/projectImages/24.jpeg',
            statusid: 1
        },
        {
            projectid: 25, 
            description: 'Services for engineers',
            title: 'To Build a Better Beta',
            url: '/img/projectImages/25.jpg',
            statusid: 1
        },
        {
            projectid: 26, 
            description: 'Metadata Assistant',
            title: 'Daily Active Users',
            url: '/img/projectImages/26.jpeg',
            statusid: 1
        },
        {
            projectid: 27, 
            description: 'A clock for modern men',
            title: 'The Uptick',
            url: '/img/projectImages/27.jpg',
            statusid: 1
        },
        {
            projectid: 28, 
            description: 'High quality, organic cotton clothes',
            title: 'Success Failure',
            url: '/img/projectImages/28.jpeg',
            statusid: 1
        },
        {
            projectid: 29, 
            description: 'Your virtual lawyer assistant',
            title: 'Terms of Service',
            url: '/img/projectImages/29.jpg',
            statusid: 1
        },
        {
            projectid: 30, 
            description: 'A crypto-currency exchange!',
            title: 'Crypto Hype Lordz',
            url: '/img/projectImages/30.jpeg',
            statusid: 1
        },
        {
            projectid: 31, 
            description: 'Help for start-ups',
            title: 'Intellectual Property',
            url: '/img/projectImages/31.jpeg',
            statusid: 1
        },
        {
            projectid: 32, 
            description: '',
            title: 'Teambuilding Exercise',
            url: '/img/projectImages/32.jpg',
            statusid: 1
        },
        {
            projectid: 33, 
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '/img/projectImages/33.jpeg',
            statusid: 1
        },
        {
            projectid: 34, 
            description: 'A game for the bloodthirsty.',
            title: 'The Blood Boy',
            url: '/img/projectImages/34.jpg',
            statusid: 2
        },
        {
            projectid: 35, 
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery II',
            url: '/img/projectImages/35.jpg',
            statusid: 2
        },
        {
            projectid: 36, 
            description: 'A quirky fashion designer outlet.',
            title: 'Quriky Fashion II',
            url: '/img/projectImages/36.jpg',
            statusid: 2
        },
        {
            projectid: 37, 
            description: 'Online help for cheap.',
            title: 'Customer Services',
            url: '/img/projectImages/37.jpg',
            statusid: 2
        },
        {
            projectid: 38, 
            description: 'An Augmented Reality World Like no Other!',
            title: 'AR Hype Lordz II',
            url: '/img/projectImages/38.jpg',
            statusid: 2
        },
        {
            projectid: 39, 
            description: 'An open online database of patents',
            title: 'The Patent Troll',
            url: '/img/projectImages/39.jpeg',
            statusid: 2
        },
        {
            projectid: 40, 
            description: 'Rethinking error handling for clients.',
            title: 'Server Error',
            url: '/img/projectImages/40.png',
            statusid: 2
        },
        {
            projectid: 41, 
            description: 'A new Late Night Supper Franchise',
            title: 'Supper is Better II',
            url: '/img/projectImages/41.jpeg',
            statusid: 2
        },
        {
            projectid: 42, 
            description: 'A home delivery food service.',
            title: 'Foodal Delivery',
            url: '/img/projectImages/42.jpeg',
            statusid: 2
        },
        {
            projectid: 43, 
            description: 'Organic seeds for garden lovers.',
            title: 'Grow Fast or Die Slow',
            url: '/img/projectImages/43.jpg',
            statusid: 2
        },
        {
            projectid: 44, 
            description: 'A home delivery apparel application',
            title: 'Cloth Delivery III',
            url: '/img/projectImages/44.jpg',
            statusid: 2
        },
        {
            projectid: 45, 
            description: 'A compass for travelers.',
            title: 'Reorientation',
            url: '/img/projectImages/45.jpg',
            statusid: 2
        },
        {
            projectid: 46, 
            description: 'A role playing game for executives',
            title: 'Chief Operating Officer',
            url: '/img/projectImages/46.jpeg',
            statusid: 2
        },
        {
            projectid: 47, 
            description: 'A magazine for the tech savvy.',
            title: 'Tech Evangelist',
            url: '/img/projectImages/47.jpg',
            statusid: 2
        },
        {
            projectid: 48, 
            description: 'IOT sensors for cheap',
            title: 'Facial Recognition',
            url: '/img/projectImages/48.jpeg',
            statusid: 2
        },
        {
            projectid: 49, 
            description: 'Your AI psychologist',
            title: 'Artificial Emotional Intelligence',
            url: '/img/projectImages/49.jpeg',
            statusid: 2
        },
        {
            projectid: 50, 
            description: 'Launch your personal crypto-currency',
            title: 'Initial Coin Offering',
            url: '/img/projectImages/50.jpeg',
            statusid: 2
        },
        {
            projectid: 51, 
            description: 'A home delivery service for toys.',
            title: 'totToy Delivery',
            url: '/img/projectImages/51.jpg',
            statusid: 2
        },
        {
            projectid: 52, 
            description: 'A tale of two lovers.',
            title: 'Fifty-One Percent',
            url: '/img/projectImages/52.jpg',
            statusid: 2
        },
        {
            projectid: 53, 
            description: 'A personal assistant application',
            title: 'Chijves',
            url: '/img/projectImages/53.jpg',
            statusid: 2
        },
        {
            projectid: 54, 
            description: 'Navigation for plebs.',
            title: 'Pilot',
            url: '/img/projectImages/54.jpg',
            statusid: 2
        },
        {
            projectid: 55, 
            description: 'A new way to think about animals',
            title: 'Purple Giraffe',
            url: '/img/projectImages/55.jpg',
            statusid: 2
        },
        {
            projectid: 56, 
            description: 'A guide to NYC',
            title: 'Sweet Taste of Liberty',
            url: '/img/projectImages/56.jpg',
            statusid: 2
        },
        {
            projectid: 57, 
            description: 'Ultra luxury for everyone',
            title: 'Return of the Shirt',
            url: '/img/projectImages/57.jpg',
            statusid: 2
        },
        {
            projectid: 58, 
            description: 'A new way to make pies',
            title: 'Slutty Pumpkin',
            url: '/img/projectImages/58.jpg',
            statusid: 2
        },
        {
            projectid: 59, 
            description: 'Go on dates with other couples.',
            title: 'Matchmaker',
            url: '/img/projectImages/59.jpg',
            statusid: 2
        },
        {
            projectid: 60, 
            description: 'Game of Bitcoins',
            title: 'The Duel',
            url: '/img/projectImages/60.jpg',
            statusid: 2
        },
        {
            projectid: 61, 
            description: 'Fresh turkey delivered cheap.',
            title: 'Belly Full of Turkey',
            url: '/img/projectImages/61.jpg',
            statusid: 2
        },
        {
            projectid: 62, 
            description: 'Look suave everyday',
            title: 'Razor Delivery',
            url: '/img/projectImages/62.jpg',
            statusid: 2
        },
        {
            projectid: 63, 
            description: 'Protein for teens.',
            title: 'Proteen',
            url: '/img/projectImages/63.jpg',
            statusid: 2
        },
        {
            projectid: 64, 
            description: 'Pizzas with way too many pineapples.',
            title: 'The Pineapple Incident',
            url: '/img/projectImages/64.jpg',
            statusid: 2
        },
        {
            projectid: 65, 
            description: 'Uber for limos.',
            title: 'The Limo',
            url: '/img/projectImages/65.jpg',
            statusid: 2
        },
        {
            projectid: 66, 
            description: 'Meet your one true love',
            title: 'The Wedding',
            url: '/img/projectImages/66.jpg',
            statusid: 2
        },
        {
            projectid: 67, 
            description: 'Electronic musical instruments',
            title: 'Drumroll, Please',
            url: '/img/projectImages/67.jpg',
            statusid: 3
        },
        {
            projectid: 68, 
            description: 'A new early morning breakfast delivery',
            title: 'Fast Break',
            url: '/img/projectImages/68.jpg',
            statusid: 3
        },
        {
            projectid: 69, 
            description: 'Tinder for jobs.',
            title: 'proTinder+',
            url: '/img/projectImages/69.jpg',
            statusid: 3
        },
        {
            projectid: 70, 
            description: 'Zips that never break',
            title: 'Zip, Zip, Zip',
            url: '/img/projectImages/70.jpg',
            statusid: 3
        },
        {
            projectid: 71, 
            description: 'Git for research papers',
            title: 'GitRekt',
            url: '/img/projectImages/71.jpg',
            statusid: 3
        },
        {
            projectid: 72, 
            description: 'The IDE for sweet people',
            title: 'Cupcake',
            url: '/img/projectImages/72.jpg',
            statusid: 3
        },
        {
            projectid: 73, 
            description: 'A documentary about Rwanda.',
            title: 'Life Among the Gorillas',
            url: '/img/projectImages/73.jpg',
            statusid: 3
        },
        {
            projectid: 74, 
            description: 'A better sleep reminder',
            title: 'Nothing Good Happens After 2 A.M',
            url: '/img/projectImages/74.jpg',
            statusid: 3
        },
        {
            projectid: 75, 
            description: 'Law meets AR',
            title: 'Mary the Paralegal',
            url: '/img/projectImages/75.jpg',
            statusid: 3
        },
        {
            projectid: 76, 
            description: 'Rent clothes cheaper.',
            title: 'Best Prom Ever',
            url: '/img/projectImages/76.jpg',
            statusid: 3
        },
        {
            projectid: 77, 
            description: 'For the lactose intolerant.',
            title: 'Milk',
            url: '/img/projectImages/77.jpg',
            statusid: 3
        },
        {
            projectid: 78, 
            description: 'A diary for motivation',
            title: 'Come On',
            url: '/img/projectImages/78.jpg',
            statusid: 3
        },
        {
            projectid: 79, 
            description: 'A cheap apparel store.',
            title: 'Cheap Clothes',
            url: '/img/projectImages/79.jpg',
            statusid: 3
        },
        {
            projectid: 80, 
            description: 'Re-thinking GPS',
            title: 'Where Were We?',
            url: '/img/projectImages/80.jpg',
            statusid: 3
        },
        {
            projectid: 81, 
            description: 'A kids drawing book',
            title: 'The Scorpion and the Toad',
            url: '/img/projectImages/81.jpg',
            statusid: 3
        },
        {
            projectid: 82, 
            description: 'Restaurants serving all day breakfast.',
            title: 'Brunch',
            url: '/img/projectImages/82.jpg',
            statusid: 3
        },
        {
            projectid: 83, 
            description: 'Move for cheaper.',
            title: 'Moving Day',
            url: '/img/projectImages/83.jpg',
            statusid: 3
        },
        {
            projectid: 84, 
            description: 'Boys like to have fun.',
            title: 'Bachelor Party',
            url: '/img/projectImages/84.jpg',
            statusid: 3
        },
        {
            projectid: 85, 
            description: 'A new Fast Food Franchise',
            title: 'Fast Delivery',
            url: '/img/projectImages/85.jpg',
            statusid: 3
        },
        {
            projectid: 86, 
            description: 'Exploding friendships',
            title: 'Showdown',
            url: '/img/projectImages/86.jpg',
            statusid: 3
        },
        {
            projectid: 87, 
            description: 'Reducing waste',
            title: 'Something borrowed',
            url: '/img/projectImages/87.jpg',
            statusid: 3
        },
        {
            projectid: 88, 
            description: 'Diving lessons for kids',
            title: 'Something blue',
            url: '/img/projectImages/88.jpg',
            statusid: 3
        },
        {
            projectid: 89, 
            description: 'Track your online purchases',
            title: 'Wait for it',
            url: '/img/projectImages/89.jpg',
            statusid: 3
        },
        {
            projectid: 90, 
            description: 'AR meets dancing',
            title: 'Dance with you',
            url: '/img/projectImages/90.jpg',
            statusid: 3
        },
        {
            projectid: 91, 
            description: 'Date ideas that include your annoying best friend.',
            title: 'Third wheel',
            url: '/img/projectImages/91.jpg',
            statusid: 3
        },
        {
            projectid: 92, 
            description: 'Using AI to filter out spoilers',
            title: 'Spoiler Alert',
            url: '/img/projectImages/92.jpg',
            statusid: 3
        },
        {
            projectid: 93, 
            description: 'Better than the golden rule',
            title: 'The Platinum Rule',
            url: '/img/projectImages/93.jpg',
            statusid: 3
        },
        {
            projectid: 94, 
            description: 'YOLO',
            title: 'No Tomorrow',
            url: '/img/projectImages/94.jpg',
            statusid: 3
        },
        {
            projectid: 95, 
            description: 'Massages for couples.',
            title: 'Ten Sessions',
            url: '/img/projectImages/95.jpg',
            statusid: 3
        },
        {
            projectid: 96, 
            description: 'Secret recipes for great food',
            title: 'Foodiculous',
            url: '/img/projectImages/96.jpg',
            statusid: 3
        },
        {
            projectid: 97, 
            description: 'Book rides, pay by bitcoin',
            title: 'Blocktaxi',
            url: '/img/projectImages/97.jpg',
            statusid: 3
        },
        {
            projectid: 98, 
            description: 'AI meets text editors.',
            title: 'The Bracket',
            url: '/img/projectImages/98.jpg',
            statusid: 3
        },
        {
            projectid: 99, 
            description: 'Rent farm animals for parties.',
            title: 'The Goat',
            url: '/img/projectImages/99.jpg',
            statusid: 3
        },
        {
            projectid: 100, 
            description: 'Better believe it.',
            title: 'Miracles',
            url: '/img/projectImages/100.jpg',
            statusid: 3
        }
        ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project', null, {});
  }
};