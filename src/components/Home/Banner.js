/**
 * Created by colinjohnson on 9/16/16.
 */
import React from 'react';

const Banner = () => {
  return (
    <div id="banner-container" className="container">
      <div id="banner-1" className="banner">
        <div className="banner-copy">
          <p>Colin <span className="plus">+</span> Johnson</p>
        </div>
      </div>
      <div id="banner-2" className="banner">
        <div className="banner-copy">
          <p>Front End <span className="plus">+</span> Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
