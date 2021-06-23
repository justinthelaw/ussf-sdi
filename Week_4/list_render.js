// Given the following structure for an item:
// { name: "example item" }

// complete the code in GroceryList.js below to display an unordered list of <li> components for each item in the items entry of the props object.

import React from 'react';

const GroceryList = ({items}) => {

  let listItems = items.map((item) => (
     <li>{item.name}</li>
  ))

  return (<ul>{listItems}</ul>);
}

export default GroceryList