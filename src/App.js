import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import ShopPage from './components/ShopPage';
import About from './components/About';
import Cart from './components/Cart';
import ItemDetails from './components/ItemDetails';
import { useState } from 'react';
import itemsArray from './assetts/items';

function App() {
  const [shopItems, setShopItems] = useState(itemsArray);
  const [amountInCart, setAmountInCart] = useState(0);

  function handleAddToCartClick(e) {
    let itemId = e.target.dataset.id;
    let newShopItems = [...shopItems];
    newShopItems.map((item) => {
      if (item.id === itemId) {
        item.isInCart = true;
        item.amount += 1;
      }
    });
    setAmountInCart(amountInCart + 1);
    setShopItems(newShopItems);
  }

  function handleIncreaseUnitAmount(e) {
    let id = e.target.dataset.id;
    let newShopItems = [...shopItems];
    newShopItems.map((item) => {
      if (item.id === id) {
        if (item.amount > 0) {
          item.amount += 1;
        } else item.isInCart = false;
      }
    });
    setShopItems(newShopItems);
  }

  function handleDecreaseUnitAmount(e) {
    let id = e.target.dataset.id;
    let newShopItems = [...shopItems];
    newShopItems.map((item) => {
      if (item.id === id) {
        item.amount -= 1;
        if (item.amount === 0) {
          item.isInCart = false;
        }
      }
      return;
    });
    setShopItems(newShopItems);
  }

  return (
    <Router>
      <div className="App">
        <Navigation amountInCart={amountInCart}></Navigation>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={
              <Cart
                shopItems={shopItems}
                handleIncreaseUnitAmount={handleIncreaseUnitAmount}
                handleDecreaseUnitAmount={handleDecreaseUnitAmount}
              />
            }
          />
          <Route
            path="/shop"
            element={<ShopPage handleAddToCartClick={handleAddToCartClick} shopItems={shopItems} />}
          />
          <Route path="/shop/:id" element={<ItemDetails handleAddToCartClick={handleAddToCartClick} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
