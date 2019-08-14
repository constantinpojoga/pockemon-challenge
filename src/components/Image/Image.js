import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Lazy from 'react-lazyload';
import noImage from './no-image.png';

const Image = memo(function Image({ src, alt, className, height }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  return (
    <Lazy height={height}>
      <img src={imageError ? noImage : src} alt={alt} onError={handleImageError} className={`image ${className}`} />
    </Lazy>
  );
});

Image.displayName = 'Image';

Image.defaultProps = {
  height: 200,
  src: '',
  alt: '',
  className: '',
};

Image.propTypes = {
  height: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
