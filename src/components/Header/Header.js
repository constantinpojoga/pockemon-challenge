import React, { memo } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import './Header.scss';
import logo from './logo.png';

const Header = memo(function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__body">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Pokemon logo" className="header__logo-image" />
          </Link>

          <Nav />
        </div>
      </Container>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
