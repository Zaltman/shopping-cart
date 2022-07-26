import { Link } from 'react-router-dom';
import { HiTemplate } from 'react-icons/hi';
import { HiShoppingCart, HiSearch } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
export default function Navigation() {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <div className="navigation">
        <Link to={'/'}>
          <HiTemplate id="logo" />
        </Link>
        <ul className="navButtons">
          <Link to={'/'}>
            <li className="navButton">Home</li>
          </Link>
          <Link to={'/shop'}>
            <li className="navButton">Shop</li>
          </Link>
          <Link to={'/about'}>
            <li className="navButton">About</li>
          </Link>
          <li>
            <HiSearch className="navButton" />
          </li>
          <Link to={'/cart'}>
            <li>
              <HiShoppingCart id="cartIcon" className="navButton" />
            </li>
          </Link>
        </ul>
      </div>
    </IconContext.Provider>
  );
}
