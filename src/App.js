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

  function handleAddToCartClick(e) {
    let itemId = e.target.dataset.id;
    let newShopItems = [...shopItems];
    newShopItems = newShopItems.map((item) => {
      // console.log(item);
      if (item.id == itemId) {
        item.isInCart = true;
      }
      console.log(newShopItems);
    });
    // console.log(e.target.dataset.id);
  }
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart shopItems={shopItems} />} />
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
