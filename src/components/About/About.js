import React, { Component } from 'react';
import aboutData from './data';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.renderData = this.renderData.bind(this);
  }

  renderData() {
    return (
      <div>About</div>
    )
  }

  render() {
    return (
      <div id="about">
        <div className="container">
          {this.renderData()}
        </div>
      </div>
    );
  }
}
