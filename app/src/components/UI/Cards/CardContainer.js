/**
 * Created by colinjohnson on 11/14/16.
 */
import React, { Component } from 'react';

export default class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: ((80 / 100) * window.innerHeight),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ height: ((80 / 100) * window.innerHeight) });
    }, true);
  }

  render() {
    return (
      <div id="card-container" className="container">
        <div style={{ height: this.state.height }} className="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}
