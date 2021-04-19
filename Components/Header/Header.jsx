import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <div>
      <div className="header">
        <nav>
          <ul className="menuItems">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/Search">
                <a>Search</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
