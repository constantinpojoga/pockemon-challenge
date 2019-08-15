import React, { memo, useEffect, useCallback } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from 'components/PokemonCard/PokemonCard';
import Image from 'components/Image/Image';
import { addDefaultPokemonData, setRandomPokemonData, setLoading } from 'store/actions';
import { API_MAX } from 'shared/constants';
import { fetchPokemon } from 'shared/functions';
import pokemonEgg from './pokemon-egg.png';
import 'shared/images/page-background.jpg';
import './Homepage.scss';

const Homepage = memo(function Homepage() {
  const dispatch = useDispatch();
  const randomPokemonData = useSelector(state => state.randomPokemonData);
  const defaultPokemonData = useSelector(state => state.defaultPokemonData);
  const defaultPokemonIds = useSelector(state => state.defaultPokemonIds);

  useEffect(() => {
    if (!defaultPokemonData.length && defaultPokemonIds) {
      defaultPokemonIds.forEach(id => {
        fetchPokemon(id)
          .then(data => dispatch(addDefaultPokemonData(data)))
          .catch(reason => console.log(reason.message));
      });
    }
  }, [defaultPokemonIds, defaultPokemonData, dispatch]);

  const handleGenerate = useCallback(() => {
    const randomPokemonId = Math.trunc(Math.random() * API_MAX) + 1;
    dispatch(setLoading(true));

    fetchPokemon(randomPokemonId)
      .then(data => dispatch(setRandomPokemonData(data)))
      .catch(error => console.log(error.message))
      .finally(() => dispatch(setLoading(false)));
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch(setRandomPokemonData(null));
  }, [dispatch]);

  return (
    <div className="homepage">
      <Container>
        <h1>Pokemon challenge</h1>

        <div className="homepage__pokemon-cards">
          <Row>
            {defaultPokemonData &&
              defaultPokemonData.map((pokemonData, id) => (
                <Col key={id} xs="6" lg="3">
                  <PokemonCard pokemonData={pokemonData} />
                </Col>
              ))}

            <Col xs="6" lg="3">
              {randomPokemonData ? (
                <PokemonCard pokemonData={randomPokemonData} />
              ) : (
                <div className="homepage__placeholder">
                  <h2 className="homepage__placeholder-name">?</h2>
                  <Image src={pokemonEgg} alt="Pokemon Egg" className="homepage__placeholder-image" />
                  <div className="homepage__placeholder-text">Who's Next?</div>
                </div>
              )}
            </Col>
          </Row>
        </div>

        <div className="homepage__button-wrapper">
          <h2>Generate a random Pokemon:</h2>

          <Button color="primary" className="homepage__generate-button" onClick={handleGenerate}>
            Random Pokemon
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
