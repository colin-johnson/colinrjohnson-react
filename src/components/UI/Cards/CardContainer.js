/**
 * Created by colinjohnson on 11/14/16.
 */
import React from 'react';

const CardContainer = ({ children }) => {
  return (
    <div id="card-container" className="container">
      <div className="wrapper">
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
