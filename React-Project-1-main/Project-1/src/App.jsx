import React, { useState } from 'react';
import './App.css';
import RestaurantTable from './RestaurantTable';

function App() {
  const [restaurants, setRestaurants] = useState([
    { name: '.CN Chinese', address: '228 City Road', postcode: '3JH', rating: 5, type: 'Chinese' },
    { name: '007 Takeaway', address: '6 Drummond Street', postcode: '1HY', rating: 6, type: 'Pizza' },
    { name: '042 Restaurant & Bar', address: '885 High Road Leytonstone', postcode: '1HR', rating: 3, type: 'African' },
    { name: '1 2 3 Chinese', address: 'Unit 4 Spencer House', postcode: '3DS', rating: 4.5, type: 'Chinese' },
    { name: '400 Business Chinese Restaurant', address: '27 Park Street', postcode: '48N', rating: 5, type: 'Chinese' }
  ]);

  const [filter, setFilter] = useState({
    type: '',
    minRating: 0
  });

  const filteredRestaurants = restaurants.filter(restaurant => {
    return (
      (filter.type === '' || restaurant.type === filter.type) &&
      restaurant.rating >= filter.minRating
    );
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="App">
      <h1>Restaurant Directory</h1>
      <div className="filters">
        <label>
          Filter by Cuisine:
          <select name="type" value={filter.type} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Chinese">Chinese</option>
            <option value="Pizza">Pizza</option>
            <option value="African">African</option>
          </select>
        </label>
        <label>
          Minimum Rating:
          <input 
            type="number" 
            name="minRating" 
            min="0" 
            max="10" 
            value={filter.minRating} 
            onChange={handleFilterChange} 
          />
        </label>
      </div>
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}

export default App;