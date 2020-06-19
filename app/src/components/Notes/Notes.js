import React, { Component } from 'react';
import notesData from './data';

export default class Notes extends Component {
  constructor(props) {
    super(props);

    this.renderNotes = this.renderNotes.bind(this);
  }

  renderNotes() {
    return (
      <div>Notes</div>
    );
  }

  render() {
    return (
      <div id="projects" className="page-container">
        <div className="container">
          {this.renderNotes()}
        </div>
      </div>
    );
  }
}
