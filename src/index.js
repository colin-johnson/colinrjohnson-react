import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from './MainLayout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Notes from './components/Notes/Notes';
import Projects from './components/Projects/Projects';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/notes" component={Notes}>
        <Route path="/notes/:slug" component={Notes} />
      </Route>
    </Route>
  </Router>
), document.getElementById('main'));
