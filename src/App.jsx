import React, { useState } from 'react';
import ProductList from './components/ProductList.jsx';
import AboutUs from './components/AboutUs.jsx';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  if (showProductList) {
    return <ProductList onHomeClick={() => setShowProductList(false)} />;
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="tagline">Where green things grow</p>
        <button className="get-started-button" onClick={() => setShowProductList(true)}>
          Get Started
        </button>
      </div>
      <AboutUs />
    </div>
  );
}

export default App;
