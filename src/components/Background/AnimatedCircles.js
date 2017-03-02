/**
 * Created by colinjohnson on 9/14/16.
 */
import React, { Component } from 'react';
import Circle from './Circle';

export default class AnimatedCircles extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
    this.randomNumber = this.randomNumber.bind(this);
  }

  randomNumber(max, min) {
    return Math.floor((Math.random() * max) + min);
  }

  render() {
    const circleHolder = [];

    for (let i = 0; i < this.randomNumber(4, 4); i++) {
      circleHolder.push((<Circle key={i} />));
    }

    return (
      <div id="background-animate">
        {circleHolder}
      </div>
    );
  }
}

AnimatedCircles.propTypes = { initialCount: React.PropTypes.number };
AnimatedCircles.defaultProps = { initialCount: 0 };
