/**
 * Created by colinjohnson on 1/20/17.
 */
/**
 * Created by colinjohnson on 11/14/16.
 */
import React, { Component } from 'react';


export default class ImageCard extends Component {
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
        top: 0
      });
    }, this.props.fadeIn * 1000);
  }

  render() {
    let style = {
      backgroundColor: 'rgba(255,255,255,0.8)',
      backgroundImage: `url('${this.props.img}')`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      margin: '1%',
      height: '96%',
      flex: '4',
      alignItems: 'center',
      display: `${this.props.display}`,
      justifyContent: 'center',
      position: 'relative',
      top: `${this.state.top}px`,
      opacity: `${this.state.opacity}`,
      transition: 'all 1s ease-in-out'
    };

    return (
      <a
        href={this.props.href}
        style={style}
        className="card-div card-image"
        target="blank"
      >
        {this.props.children}
      </a>
    );
  }
}
