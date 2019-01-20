import React from 'react';

const PortfolioItem = (props) => (
  <div>
    <h1>NuFx Bootcamp App</h1>
    <p>This page is for the item with the id of {props.match.params.id}</p>
    <img src="/images/nufx.png"></img>
    </div>
);

export default PortfolioItem;
