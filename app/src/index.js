import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './Layout';
import Home from './components/Home';
import About from './components/About/About';
// import Notes from './components/Notes/Notes';
import Projects from './components/Projects/Projects';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={About} />
      {/* <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} /> */}
    </Route>
  </Router>,
  document.getElementById('main'),
);

// <Route path="/notes" component={Notes}>
//   <Route path="/notes/:slug" component={Notes} />
// </Route>
