/**
 * Created by colinjohnson on 2/11/17.
 */
const projectData = [
  {
    title: 'Instagram Automator',
    summary: 'My Instagram-Bot application was a passion project of mine that grows your Instgram reach and following by automating it for you utilizing the Instagram API. I built the app from the ground up with user authentication, user sessions, a no SQL database, and credit card payment processing. User authentication was done and managed with Passport.js, Node.js and Express. The back end and data base is built and managed with Node.js, Express, Mongoose, and Mongo DB. Payment processing was handled by integrating the Stripe API. The front end was entirely built with React, Redux, and Javascript/ES6. And automating the users Instagram was done by integrating the Instagram API. Unfortunately, the app lives at about 90% complete because Instagram closed their API during development.',
    responsibilities: ['Front End Development', 'Back End Development', 'Restful API Design', 'API Integrations', 'Dev Ops'],
    technologies: [
      {
        title: 'Front End',
        types: ['React', 'Redux', 'Javascript/ES6', 'Webpack'],
      },
      {
        title: 'Back End',
        types: ['Node', 'Express', 'Passport.js', 'Mongoose', 'Mongo DB'],
      },
      {
        title: 'API Integrations',
        types: ['Instagram API', 'Stripe Payments API'],
      },
    ],
    image: '../images/projects/asd.png',
    href: 'https://github.com/colin-johnson/instagram-bot',
  },
  {
    title: 'JOEY Restaurants',
    summary: 'Being the lead Developer on the complete rebuild of the JOEY Restaurants website allowed me to utilize both Back End and Front End skill sets. The back end is built on Craft CMS and PHP. The front end is made of Twig templates, Javascript/ES6, React.js. Using and integrating with Craft Element-API, QSR API, MailChimp API, and Workable API for a rich and featureful experience.',
    responsibilities: ['Front End Development', 'Back End Development', 'API Integrations', 'Dev Ops'],
    technologies: [
      {
        title: 'Front End',
        types: ['React', 'Javascript/ES6', 'HTML5', 'CSS3', 'Twig', 'Webpack'],
      },
      {
        title: 'Back End',
        types: ['Craft CMS', 'PHP'],
      },
      {
        title: 'API Integrations',
        types: ['Workable', 'QSR', 'MailChimp'],
      },
    ],
    image: '../images/projects/joey-bg.jpg',
    href: 'http://joeyrestaurants.com/',
  },
  {
    title: 'Lynberg & Watkins',
    summary: 'Lynberg & Watkins is a law firm that came to me for a fresh new modern website. To manage their database of attorneys and clients I used Node.js with Express, and Mongo DB. The entire front end was built using React.js, which was perfect for managing filtered searches, predictive searches and more. They also wanted a blog page manageable through with Wordpress. I accessed the Wordpress API and pulled in their blog articles to their site. The end product was a fluid, fast reacting, modern, eye-catching website.',
    responsibilities: ['Front End Development', 'Back End Development'],
    technologies: [
      {
        title: 'Front End',
        types: ['React', 'Javascript/ES6', 'HTML5', 'CSS3', 'Webpack'],
      },
      {
        title: 'Back End',
        types: ['Node', 'Express', 'MongoDB', 'Wordpress'],
      },
      {
        title: 'API Integrations',
        types: ['Wordpress'],
      },
    ],
    image: '../images/projects/lynberg-bg.jpg',
    href: 'http://lynberg.com/',
  },
  {
    title: 'Titon Toolkit',
    summary: 'Titon Toolkit is an open source React based UI component ' +
    'library that I contribute to. I help build out UI components, migrate ' +
    'old components to React & ES6, run tests and linting on migrations, and ' +
    'help maintain the library.',
    responsibilities: ['Front End Development'],
    technologies: [{
      title: 'Front End',
      types: ['React', 'Javascript/ES6', 'SASS', 'Flowtype', 'Jest'],
    }],
    image: '../images/projects/titon-bg.png',
    href: 'https://github.com/titon/toolkit',
  },
  {
    title: 'Twelve Step Meetings',
    summary: 'Twelve Step Meetings is a project currently in development ' +
    'which will allow anyone to take the twelve step program to sobriety ' +
    'online. I was brought on to the team to contribute to building out the ' +
    'user interface and client facing pages with React and ES6.',
    responsibilities: ['Front End Development'],
    technologies: [{
      title: 'Front End',
      types: ['React', 'Javascript/ES6', 'SASS', 'Webpack', 'Node'],
    }],
    image: '../images/projects/twelve-bg.jpg',
    href: 'https://github.com/twelvestepmeetings/twelvestepmeetings.git',
  },
  {
    title: 'Palisades Media Group',
    summary: 'Palisades Media Group brought me on to build their new website. ' +
    'The goal was a one page parallax website. After being provided the ' +
    'design comps I went on to build out the site using object oriented ' +
    'Javascript, HTML5, CSS3, and JQuery Skrollr for the parallax effect. ' +
    'The site is fully responsive on any screen size and orientation.',
    responsibilities: ['Front End Development'],
    technologies: [{
      title: 'Front End',
      types: ['HTML5', 'CSS3', 'Javascript', 'Jquery'],
    }],
    image: '../images/projects/palisades-bg.png',
    href: 'http://palisadesmedia.com/',
  },
];

export default projectData;
