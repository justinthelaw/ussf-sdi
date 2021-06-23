import { Link } from 'react-router-dom';


function Nav( {history} ) {
  return (
    <div>
      <nav>
        <ul>
        <Link exact to="/home">
          <li>Home</li>
          </Link>
          <Link exact to="/products">
          <li>Products</li>
          </Link>
          <Link exact to="/cart">
          <li>Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;