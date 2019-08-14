import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import { Spinner } from 'reactstrap';
import { useSelector } from 'react-redux';
import './PageSpinner.scss';

const PageSpinner = memo(function PageSpinner() {
  const loading = useSelector(state => state.loading);

  if (!loading) return null;

  return createPortal(
    <div className="page-spinner">
      <div className="page-spinner__spinner-wrap">
        <Spinner color="info" style={{ width: '3rem', height: '3rem' }} />
      </div>
    </div>,
    document.getElementById('page-spinner-portal')
  );
});

export default PageSpinner;
