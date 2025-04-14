import React from 'react';

const RestaurantTable = ({ restaurants }) => {
  return (
    <table className="restaurant-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Postcode</th>
          <th>Rating</th>
          <th>Type of Food</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant, index) => (
          <tr key={index}>
            <td>{restaurant.name}</td>
            <td>{restaurant.address}</td>
            <td>{restaurant.postcode}</td>
            <td>{restaurant.rating}</td>
            <td>{restaurant.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RestaurantTable;