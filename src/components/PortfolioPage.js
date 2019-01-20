import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Checkout the stuff I've done:</p>
    <Link to="/portfolio/1">Nutrient Fix Bootcamp</Link>
    <Link to="/portfolio/2">AMC Consulting Website</Link>
  </div>
);

export default PortfolioPage;
