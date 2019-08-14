import React, { memo, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Collapse } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from 'store/actions';
import './Homepage.scss';

const Homepage = memo(function Homepage() {
  return (
    <div className="homepage">
      <Container>
        Homepage
      </Container>
    </div>
  );
});

Homepage.displayName = 'Homepage';

export default Homepage;
