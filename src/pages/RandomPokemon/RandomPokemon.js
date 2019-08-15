import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import PokemonCard from 'components/PokemonCard/PokemonCard';
import './RandomPokemon.scss';

const RandomPokemon = memo(function RandomPokemon() {
  const randomPokemonData = useSelector(state => state.randomPokemonData);

  return (
    <div className="random-pokemon">
      <Container>
        {randomPokemonData ? (
          <>
            <h1>Example of reusing the Redux store:</h1>
            <Row>
              <Col xs="6" lg="3">
                <PokemonCard pokemonData={randomPokemonData} />
              </Col>
            </Row>
          </>
        ) : (
          <>
            <h1>Could not find the Pokemon data in the store:</h1>
            <p>
              Please go to the <Link to="/">Homepage</Link> and generate a random Pokemon. You can return later on this
              page to check the results.
            </p>
          </>
        )}
      </Container>
    </div>
  );
});

RandomPokemon.displayName = 'RandomPokemon';

export default RandomPokemon;
