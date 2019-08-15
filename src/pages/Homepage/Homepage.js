import React, { memo, useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from 'components/PokemonCard/PokemonCard';
import { API_MAX } from 'shared/constants';
import './Homepage.scss';

const Homepage = memo(function Homepage() {
  const dispatch = useDispatch();
  const defaultPokemonIds = useSelector(state => state.defaultPokemonIds);
  const [randomPokemonId, setRandomPokemonId] = useState(0);

  const handleGenerate = useCallback(() => {
    setRandomPokemonId(Math.trunc(Math.random() * API_MAX) + 1);
  }, []);

  const handleReset = useCallback(() => {
    setRandomPokemonId(0);
  }, []);

  return (
    <div className="homepage">
      <Container>
        <h1>Homepage </h1>

        <div className="homepage__pokemon-cards">
          <Row>
            {defaultPokemonIds &&
              [...defaultPokemonIds, randomPokemonId].map((pokemonId, id) => (
                <Col key={id} xs="6" lg="3">
                  <PokemonCard id={pokemonId} />
                </Col>
              ))}
          </Row>
        </div>

        <div className="homepage__button-wrapper">
          <h2>Generate a random Pokemon: </h2>

          <Button color="primary" outline className="homepage__generate-button" onClick={handleGenerate}>
            Generate
          </Button>

          <Button color="danger" outline onClick={handleReset}>
            Reset
          </Button>
        </div>
      </Container>
    </div>
  );
});

Homepage.displayName = 'Homepage';

export default Homepage;
