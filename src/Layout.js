/**
 * Created by colinjohnson on 11/16/16.
 */
import React from 'react';
import Header from './components/Header';
// import Background from './components/Background/AnimatedCircles';

const Layout = ({ children }) => (
  <div className="main-container">
    <Header />
    {children}
  </div>
);

export default Layout;
