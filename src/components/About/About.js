import React, { Component } from 'react';
import data from './data';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  renderData() {
    return data.map(d => (
      <div className="card-box">
        <div className="container-fluid">
          <h2 className="title">{d.title}</h2>
        </div>
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
