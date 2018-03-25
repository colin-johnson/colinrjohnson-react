/**
 * Created by colinjohnson on 2/11/17.
 */
const aboutData = [
  {
    type: 'single',
    title: 'About',
    content: 'I\'m a Full Stack Engineer based Portland, OR.',
  },
  {
    type: 'nested',
    title: 'Knowledge & Experience',
    content: [
      {
        title: 'Front End',
        languages: ['Javascript/ES6', 'HTML5', 'CSS3', 'Git', 'React', 'React Native', 'SASS', 'Bootstrap', 'Jquery'],
        description: ''
      },
      {
        title: 'Back End',
        languages: ['PHP', 'Node', 'Express'],
        description: ''
      },
      {
        title: 'Tools',
        languages: ['Git','Redux', 'React-Router', 'ReactCSS', 'Aesthetic', 'NPM', 'Webpack', 'Browserify', 'ESLint', 'GSAP', 'Babel', '..and more'],
        description: ''
      }
    ],
  },
  {
    type: 'single',
    title: 'Selected Clients',
    content: 'Nike',
  },
  {
    type: 'single',
    title: 'Timeline',
    content: 'start',
  },
  {
    type: 'href',
    title: 'Resumé',
    content: '',
  },
  {
    type: 'single',
    title: 'Contact',
    content: 'contact@colinrjohnson.com',
  },
  {
    type: 'social',
    title: 'Social',
    content: [
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/colinrjohnson/',
      },
      {
        title: 'GitHub',
        href: 'https://github.com/colin-johnson',
      },
      {
        title: 'Twitter',
        href: 'https://twitter.com/whatchamacolin',
      },
    ],
  },
];

export default aboutData;
