/**
 * Created by colinjohnson on 2/11/17.
 */
const aboutData = [
  {
    type: 'single',
    title: 'About',
    content: ['A passionate Full Stack Web Engineer based in Portland, OR.', 'React & Node.js enthusiast, vanilla Javascript lover, and intuitive, concise, and performant code writer.', 'Agile and adaptable in nature, with the ability to conceptualize, scope, and build from idea to launch.'],
  },
  {
    type: 'nested',
    title: 'Knowledge & Experience',
    content: [
      {
        title: 'Front End',
        languages: ['React', 'Javascript/ES6', 'HTML5', 'CSS3', 'SASS'],
      },
      {
        title: 'Back End',
        languages: ['Node.js', 'Express.js', 'PHP'],
      },
      {
        title: 'Tools',
        languages: ['Git', 'Redux', 'React-Router', 'ReactCSS', 'Aesthetic', 'NPM', 'Webpack', 'Browserify', 'ESLint', 'GSAP', 'Babel', '..and more'],
      },
    ],
  },
  {
    type: 'single',
    title: 'Selected Clients',
    content: ['Nike'],
  },
  {
    type: 'single',
    title: 'Timeline',
    content: ['start'],
  },
  {
    type: 'href',
    title: 'Resumé',
    content: '',
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
    type: 'single',
    title: 'Contact',
    content: ['contact@colinrjohnson.com'],
  },
];

export default aboutData;
