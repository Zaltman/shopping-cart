import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to={'/'}>
        <h3 className="logo">LOGO</h3>
      </Link>
      <ul className="navButtons">
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/shop'}>
          <li>Shop</li>
        </Link>

        <Link to={'/about'}>
          <li>About</li>
        </Link>

        <li>Search</li>
        <Link to={'/cart'}>
          <li>Cart </li>
        </Link>
      </ul>
    </div>
  );
}
