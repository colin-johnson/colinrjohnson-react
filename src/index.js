import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MainLayout from './MainLayout';
import Home from './components/Home/index';
import About from './components/About/About';
import Projects from './components/Projects/index';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </Route>
  </Router>
), document.getElementById('main'));
