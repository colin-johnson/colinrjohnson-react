import React, { Component } from 'react';
import CardContainer from '../UI/Cards/CardContainer';
import Card from '../UI/Cards/Card';
import projectData from './data';

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.renderProjects = this.renderProjects.bind(this);
  }

  renderProjects() {
    return (
      <div>Projects</div>
    );
  }

  render() {
    return (
      <div id="projects">
        <div className="container">
          {this.renderProjects()}
        </div>
      </div>
    );
  }
}
