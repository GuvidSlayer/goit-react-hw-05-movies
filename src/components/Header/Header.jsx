import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [activeLink, setActiveLink] = useState('/');
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link
              to="/"
              className={activeLink === '/' ? 'active-link' : ''}
              onClick={() => setActiveLink('/')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className={activeLink === '/movies' ? 'active-link' : ''}
              onClick={() => setActiveLink('/movies')}
            >
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
