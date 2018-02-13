import React, { Component } from 'react';
import data from './data';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  renderData() {
    return data.map(d => (
      <div>
        <h2>{d.title}</h2>
        <ul>
          {d.content.map(a => <li>{a}</li>)}
        </ul>
        <p>{d.description}</p>
      </div>
    ));
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
