import React, { memo, useState, useCallback } from 'react';
import NavMenu from './NavMenu';
import hamburgerSVG from './hamburger.svg';
import './Nav.scss';

const Nav = memo(function Nav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setMenuIsOpen(false);
  }, []);

  return (
    <nav className="nav">
      <button className="nav__button nav__trigger" onClick={() => setMenuIsOpen(true)}>
        MENU
        <img className="nav__hamburger-svg" src={hamburgerSVG} alt="" />
      </button>
      <NavMenu menuIsOpen={menuIsOpen} handleClose={handleClose} />
    </nav>
  );
});

Nav.displayName = 'Nav';

export default Nav;
