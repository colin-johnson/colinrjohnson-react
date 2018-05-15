/**
 * Created by colinjohnson on 2/11/17.
 */
const aboutData = [
  {
    type: 'single',
    title: 'About',
    content: ['A passionate Full Stack Web Engineer based in Portland, OR.', 'React & Node.js enthusiast, vanilla Javascript lover, and intuitive, concise, and performant code writer.', 'Agile and adaptable in nature, with the ability to conceptualize, scope, and lead a build from idea to launch.'],
  },
  {
    type: 'nested',
    title: 'Knowledge & Experience',
    content: [
      {
        title: 'Front End',
        languages: ['Javascript/ES6', 'React', 'Redux', 'HTML5', 'CSS3', 'SASS', 'Vue.js', 'JQuery (if necessary)'],
      },
      {
        title: 'Back End',
        languages: ['Node.js', 'Express.js', 'MongoDB', 'PHP', 'MySQL'],
      },
      {
        title: 'Tools',
        languages: ['Git', 'Webpack', 'Jest w/ Enzyme', 'Babel', 'NPM'],
      },
      {
        title: 'Other',
        languages: ['RESTful API Design', 'API Integrations', 'Craft CMS', 'Contentful CMS'],
      },
    ],
  },
  {
    type: 'client',
    title: 'Selected Clients',
    content: ['Nike', 'Red Bull', 'Amazon', 'Joey Restaurants', 'Lynberg & Watkins', 'South Bay Trainer', 'Led Lenser', 'Art Institutes', 'Honda', 'Toyota'],
  },
  // {
  //   type: 'single',
  //   title: 'Timeline',
  //   content: ['start'],
  // },
  {
    type: 'href',
    title: 'Resumé',
    content: 'Click Me',
    href: '/ColinJohnson-Resume.pdf',
  },
  {
    type: 'social',
    title: 'Connect',
    content: [
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/colinrjohnson/',
      },
      {
        title: 'GitHub',
        href: 'https://github.com/colin-johnson',
      },
    ],
  },
  {
    type: 'href',
    title: 'Contact',
    content: 'contact@colinrjohnson.com',
    href: 'mailto:contact@colinrjohnson.com',
  },
];

export default aboutData;
