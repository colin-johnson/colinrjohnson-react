/**
 * Created by colinjohnson on 9/28/16.
 */
import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav id="nav-menu">
      <div className="container">
        <div className="row">
          <div className="nav-menu-container">
            <div className="nav-menu-container">
              <Link
                to="/"
                id="home-btn"
                activeClassName="active"
                className="nav-menu-button"
              />Colin Johnson
            </div>
            <Link
              to="/projects"
              id="projects-btn"
              activeClassName="active"
              className="nav-menu-button"
            >Projects
            </Link>
          </div>
          <div className="nav-menu-container">
            <Link
              to="/about"
              id="about-btn"
              activeClassName="active"
              className="nav-menu-button"
            >About
            </Link>
          </div>
          <div className="nav-menu-container">
            <Link
              to="/notes"
              id="notes-btn"
              activeClassName="active"
              className="nav-menu-button"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
