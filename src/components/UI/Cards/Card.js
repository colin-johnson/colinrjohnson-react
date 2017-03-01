/**
 * Created by colinjohnson on 11/14/16.
 */
import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      top: 50,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        opacity: 1,
        top: 0,
      });
    }, this.props.fadeIn * 1000);
  }

  render() {
    let style = {
      flex: `${this.props.flex ? this.props.flex : '4'}`,
      margin: '1%',
      padding: '5%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      top: `${this.state.top}px`,
      opacity: `${this.state.opacity}`,
      transition: 'all 1s ease-in-out',
    };

    return (
      <div
        style={{ ...style, ...this.props.style }}
        className="card-div"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}

Card.PropTypes = {
  flex: React.PropTypes.string,
  fadeIn: React.PropTypes.number,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func,
};
