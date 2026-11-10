import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice.jsx';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const totalPlants = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Cost of one line (unit price x quantity)
  const calculateTotalCost = (item) => item.cost * item.quantity;

  // Total amount for the whole cart
  const calculateTotalAmount = () =>
    cart.reduce((total, item) => total + calculateTotalCost(item), 0);

  const handleIncrement = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));

  const handleDecrement = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));

  const handleRemove = (item) => dispatch(removeItem(item.name));

  const handleCheckout = () => setCheckoutMessage('Checkout: Coming Soon!');

  return (
    <main className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>

      <div className="cart-summary">
        <p>
          Total plants: <strong data-testid="cart-total-plants">{totalPlants}</strong>
        </p>
        <p className="cart-total-amount">
          Total Cart Amount: <strong>${calculateTotalAmount()}</strong>
        </p>
      </div>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty. Add a plant to get started.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-cost">Unit price: ${item.cost}</p>
                <div className="cart-item-quantity">
                  <button
                    className="quantity-button"
                    onClick={() => handleDecrement(item)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    &minus;
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncrement(item)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>
                <p className="cart-item-total">Total: ${calculateTotalCost(item)}</p>
              </div>
              <button className="delete-button" onClick={() => handleRemove(item)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-actions">
        <button className="continue-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
      {checkoutMessage && (
        <p className="checkout-message" role="status">{checkoutMessage}</p>
      )}
    </main>
  );
}

export default CartItem;
