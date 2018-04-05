/**
 * Created by colinjohnson on 2/11/17.
 */
const projectData = [
  {
    title: 'Instagram-Bot',
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
    image: '../images/projects/titon-bg.png',
    href: 'https://github.com/colin-johnson/instagram-bot',
  },
  {
    title: 'JOEY Restaurants',
    summary: 'I was the lead Developer on the complete rebuild of the JOEY Restaurants website. The back end is built on Craft CMS. The front end is made of Twig templates, Javascript/ES6, and React.js used on necessary components. We used the Craft CMS plugin Element-Api to handle pulling in Craft data in our React components. They use the ATS, Workable, for their job applicant tracking, and they wanted to be able to fully manage and customize their careers section. So, I integrated Workable full API endpoints for getting job applications and creating full dynamic forms with React, and posting candidate applications with JS and PHP. We used the QSR API to handle restaurant reservations, and the MailChimp API for newsletter subscribing and email submissions.',
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
        types: ['Workable API', 'QSR API', 'MailChimp API'],
      },
    ],
    image: '../images/projects/titon-bg.png',
    href: 'https://joeyrestaurants.com',
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
    ],
    image: '../images/projects/titon-bg.png',
    href: 'http://lynberg.com/',
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
    image: '../images/projects/titon-bg.png',
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
    image: '../images/projects/titon-bg.png',
    href: 'http://palisadesmedia.com/',
  },
  {
    title: 'To Him, From Her',
    summary: 'To Him, From Her is a lifestyle blog. The goal was to create a ' +
    'fashion/lifestyle blog targeted at a female audience with an integrated ' +
    'Etsy shop to promote products. My duties included UI/UX design, branding,' +
    ' and front end development, with some back end integration.',
    responsibilities: ['Front End Development', 'Back End Development', 'UI/UX Design', 'Branding'],
    technologies: [
      {
        title: 'Front End',
        types: ['HTML5', 'CSS3', 'Javascript'],
      },
      {
        title: 'Back End',
        types: ['PHP', 'Wordpress'],
      },
    ],
    image: '../images/projects/titon-bg.png',
    href: 'http://tohimfromher.com/',
  },
  {
    title: 'South Bay Trainer',
    summary: 'South Bay Trainer was in need of a complete redesign and build ' +
    'of their website. The goal was a simple, user-friendly, and high ' +
    'converting design that matched their branding and company culture. ' +
    'After completing the redesign the site was built to be fully responsive.',
    responsibilities: ['Front End Development', 'Back End Development', 'UI/UX Design'],
    technologies: [
      {
        title: 'Front End',
        types: ['HTML5', 'CSS3', 'Javascript', 'Jquery'],
      },
      {
        title: 'Back End',
        types: ['PHP'],
      },
    ],
    image: '../images/projects/titon-bg.png',
    href: 'http://southbaytrainer.com/',
  },
];

export default projectData;
