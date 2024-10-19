import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/ProductCard';

import '../Style.css'; // Ensure to import your CSS file

const Plants = () => {
  const { addToCart } = useContext(CartContext);
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch('/data/plants.json');
      const data = await response.json();
      setPlants(data);
      setFilteredPlants(data);
    };

    const fetchCategories = async () => {
      const response = await fetch('/data/categories.json');
      const data = await response.json();
      setCategories(data);
    };

    fetchPlants();
    fetchCategories();
  }, []);

  useEffect(() => {
    setFilteredPlants(
      plants.filter(
        (plant) =>
          (selectedCategory === '' || plant.category === selectedCategory) &&
          (plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    );
  }, [plants, selectedCategory, searchTerm]);

  return (
    <div>
      <Navbar />
    <div className="plants-container">

      <video className="background-video" autoPlay loop muted>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="sidebar">
        <h3>Categories</h3>
        <ul>
          <li onClick={() => setSelectedCategory('')}>
          <i className="fas fa-leaf" style={{ marginRight: '5px' }}></i>
            All</li>
          {categories.map((category) => (
            <li key={category.id} onClick={() => setSelectedCategory(category.name)}>
              <i className="fas fa-leaf" style={{ marginRight: '5px' }}></i>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="plants-content">
      <input
          type="text"
          className="search-bar"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="product-list">
          {filteredPlants.map((plant) => (
            <ProductCard key={plant.id} product={plant} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div></div>
  );
};

export default Plants;
