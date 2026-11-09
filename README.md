# Paradise Nursery

Paradise Nursery is a shopping cart front end for an online houseplant shop, built with React and Redux Toolkit.

## Features
- Landing page with background image, company name, company description and a **Get Started** button
- Product listing page with 18 unique houseplants in 3 categories (thumbnail, name, price, Add to Cart)
- Navbar on the product and cart pages (Home, Plants, Cart) with a live cart item count
- Shopping cart page with per-plant subtotal, total plants, total cost, increase / decrease / delete buttons, Checkout ("Coming Soon") and Continue Shopping

## Tech stack
React 18, Redux Toolkit, React-Redux, Vite, GitHub Pages (`gh-pages`)

## Project structure
```
src/
  App.jsx                  landing page + page switching
  App.css                  all styling (landing background image lives here)
  main.jsx                 React / Redux entry
  store.js                 Redux store
  CartSlice.jsx            Redux slice: addItem, removeItem, updateQuantity
  plantsData.js            plant catalogue
  components/
    AboutUs.jsx            company description
    ProductList.jsx        navbar + product listing
    CartItem.jsx           shopping cart page
```

## Run locally
```
npm install
npm run dev
```

## Deploy to GitHub Pages
1. Create a **public** GitHub repository and push this project to it.
2. Run `npm run deploy` (builds and publishes `dist` to the `gh-pages` branch).
3. In the repo go to Settings > Pages and set the source to the `gh-pages` branch.
