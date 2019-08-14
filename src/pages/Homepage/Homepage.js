import React, { memo, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Collapse } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from 'components/PokemonCard/PokemonCard';
import { handleFetchError } from 'shared/functions';

import { setLoading } from 'store/actions';
import './Homepage.scss';

const Homepage = memo(function Homepage() {
  const dispatch = useDispatch();
  const defaultPokemonIds = useSelector(state => state.defaultPokemonIds);
  const [randomPokemonId, setRandomPokemonId] = useState(0);

  return (
    <div className="homepage">
      <Container>
        <h1>Homepage </h1>
        <Row>
          {defaultPokemonIds &&
            [...defaultPokemonIds, randomPokemonId].map(pokemonId => (
              <Col key={pokemonId} sm="6" md="3">
                <PokemonCard id={pokemonId} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
});

Homepage.displayName = 'Homepage';

export default Homepage;
