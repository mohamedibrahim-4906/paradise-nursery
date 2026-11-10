import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice.jsx';
import plantsArray from '../plantsData.js';
import CartItem from './CartItem.jsx';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  // Total number of plants in the cart (sum of all quantities)
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // A plant's button is disabled once it is in the cart
  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
  };

  return (
    <div className="app-shell">
      <nav className="navbar">
        <button className="brand" onClick={onHomeClick} aria-label="Paradise Nursery home">
          <span className="brand-name">Paradise Nursery</span>
          <span className="brand-sub">Where green things grow</span>
        </button>
        <div className="nav-links">
          <button className="nav-link" onClick={onHomeClick}>Home</button>
          <button
            className={`nav-link ${!showCart ? 'active' : ''}`}
            onClick={() => setShowCart(false)}
          >
            Plants
          </button>
          <button
            className={`nav-link cart-link ${showCart ? 'active' : ''}`}
            onClick={() => setShowCart(true)}
            aria-label={`Cart with ${totalQuantity} items`}
          >
            <svg viewBox="0 0 256 256" width="34" height="34" aria-hidden="true">
              <circle cx="80" cy="216" r="12" fill="currentColor" />
              <circle cx="184" cy="216" r="12" fill="currentColor" />
              <path
                d="M42.3 72H221.7l-26.4 92.4A15.9 15.9 0 0 1 179.9 176H84.1a15.9 15.9 0 0 1-15.4-11.6L32.5 37.8A8 8 0 0 0 24.8 32H8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
            <span className="cart-count" data-testid="cart-count">{totalQuantity}</span>
          </button>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <main className="product-grid-wrap">
          {plantsArray.map((group) => (
            <section className="category" key={group.category}>
              <h2 className="category-title">{group.category}</h2>
              <div className="product-grid">
                {group.plants.map((plant) => (
                  <article className="product-card" key={plant.name}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <p className="product-price">${plant.cost}</p>
                    <button
                      className="add-to-cart-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.name)}
                    >
                      {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default ProductList;
