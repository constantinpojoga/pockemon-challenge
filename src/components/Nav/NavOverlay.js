import React, { memo } from 'react';
import PropTypes from 'prop-types';

const NavOverlay = memo(function Nav({ onClick }) {
  return <div className="nav__overlay" onClick={onClick} />;
});

NavOverlay.displayName = 'NavOverlay';

NavOverlay.propTypes = {
  onClick: PropTypes.func,
};

export default NavOverlay;
