import React, { memo, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';
import './Header.scss';

const Header = memo(function Header() {
  return (
    <header className="header">
      <Container>
        header
      </Container>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
