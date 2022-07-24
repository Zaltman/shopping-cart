import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import ShopPage from './components/ShopPage';
import About from './components/About';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
