/**
 * Created by colinjohnson on 9/28/16.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  componentDidMount() {
    const path = window.location.pathname;
    if (path !== '/') {
      document.getElementById('nav-menu').style.opacity = '1';
      document.getElementById(`${path.split('/')[1]}-btn`).classList.add('active');
    } else {
      document.getElementById('nav-menu').style.animation = 'fadein 3s 3.5s 1 normal forwards';
    }
  }

  render() {
    return (
      <nav id="nav-menu">
        <div className="container">
          <div className="row">
            <div>
              <div className="geo" />
              <Link
                to="/"
                id="home-btn"
                activeClassName="active"
                className="nav-menu-button"
              ><h1>Colin Johnson</h1>
                <p>Web <span className="plus">+</span> Engineer</p>
              </Link>
            </div>
            <div className="nav-menu-container">
              <Link
                to="/projects"
                id="projects-btn"
                activeClassName="active"
                className="nav-menu-button"
              >Projects
              </Link>

              <Link
                to="/about"
                id="about-btn"
                activeClassName="active"
                className="nav-menu-button"
              >About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}


export default Header;
//
// <Link
//   to="/notes"
//   id="notes-btn"
//   activeClassName="active"
//   className="nav-menu-button"
// >Notes
// </Link>
