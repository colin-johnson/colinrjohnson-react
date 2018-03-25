/**
 * Created by colinjohnson on 11/16/16.
 */
import React from 'react';
import Header from './components/UI/Header';
import Background from './components/Background/AnimatedCircles';

const MainLayout = ({ children }) => (
  <div className="main-container">
    <Header />
    {children}
  </div>
);

export default MainLayout;
