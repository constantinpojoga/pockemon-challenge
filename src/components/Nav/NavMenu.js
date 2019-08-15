import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import NavOverlay from './NavOverlay';

const NavMenu = memo(function NavMenu({ menuIsOpen, handleClose }) {
  useEffect(() => {
    const handleKeyUp = e => e.keyCode === 27 && handleClose();

    const removeListeners = () => {
      window.removeEventListener('resize', handleClose, { passive: true });
      document.removeEventListener('keyup', handleKeyUp, { passive: true });
    };

    if (menuIsOpen) {
      window.addEventListener('resize', handleClose, { passive: true });
      document.addEventListener('keyup', handleKeyUp, { passive: true });
    } else {
      removeListeners();
    }

    return removeListeners;
  }, [menuIsOpen, handleClose]);

  return (
    <>
      {menuIsOpen && <NavOverlay onClick={handleClose} />}

      <div className={`nav__menu${menuIsOpen ? ' nav__menu--open' : ''}`}>
        <button className="nav__close" onClick={handleClose}>×</button>

        <ul className="nav__list" onClick={handleClose}>
          <li className="nav__list-item">
            <NavLink to="/" className="nav__link" activeClassName="nav__link--active">Home</NavLink>
          </li>

          <li className="nav__list-item">
            <NavLink to="/test-page" className="nav__link" activeClassName="nav__link--active">Test Page</NavLink>
          </li>

          <li className="nav__list-item">
            <NavLink to="/test-page1" className="nav__link" activeClassName="nav__link--active">Test Page</NavLink>
          </li>

          <li className="nav__list-item">
            <NavLink to="/test-page1" className="nav__link" activeClassName="nav__link--active">Test Page</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
});

NavMenu.displayName = 'NavMenu';

NavMenu.defaultProps = {
  menuIsOpen: false,
};

NavMenu.propTypes = {
  menuIsOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default NavMenu;
