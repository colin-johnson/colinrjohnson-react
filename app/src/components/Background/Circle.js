/**
 * Created by colinjohnson on 9/14/16.
 */
import React, { Component } from 'react';

let size;
const w = (window.innerWidth / 4) * 3; // 3/4 of window width
const w2 = (window.innerWidth / 4) / 2; //
const h = (window.innerHeight / 4) * 2;
const colors = ['#411919', '#BCBCBC', '#44647B', '#979871', '#9B1516'];

export default class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: this.randomNumber(h, 0),
      left: this.randomNumber(w, 0),
      transition: '',
    };

    this.randomNumber = this.randomNumber.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        top: this.randomNumber(h, 0),
        left: this.randomNumber(w, 0),
        transition: this.randomNumber(40, 35),
      });
    }, 10);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        top: this.randomNumber(h, 0),
        left: this.randomNumber(w2, 0),
        transition: this.randomNumber(40, 35),
      });
    }, this.state.transition * 1000);
  }

  randomNumber(max, min) {
    return Math.floor((Math.random() * max) + min);
  }

  render() {
    if (window.innerWidth <= 480) {
      size = this.randomNumber(55, 50);
    } else if (window.innerWidth <= 768 && window.innerWidth > 480) {
      size = this.randomNumber(65, 60);
    } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
      size = this.randomNumber(75, 70);
    } else {
      size = this.randomNumber(85, 80);
    }

    const style = {
      width: `${size}px`,
      height: `${size}px`,
      opacity: '0.7',
      filter: `blur(${this.randomNumber(7, 5)}px)`,
      WebkitFilter: `blur(${this.randomNumber(7, 5)}px)`,
      backgroundColor: `${colors[this.randomNumber(5, 1) - 1]}`,
      transform: `translate(${this.state.left}px, ${this.state.top}px)`,
      WebkitTransform: `translate(${this.state.left}px, ${this.state.top}px)`,
      msTransform: `translate(${this.state.left}px, ${this.state.top}px)`,
      transition: `all ${this.state.transition}s ease-in-out`,
    };

    return (
      <div style={style} className="circle"></div>
    );
  }
}
