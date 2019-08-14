import React, { memo, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'components/Image/Image';
import { handleFetchError } from 'shared/functions';
import { setLoading } from 'store/actions';
import { API_URL } from 'shared/constants';
import pokemonEgg from './pokemon-egg.png';
import './PokemonCard.scss';

const PokemonCard = memo(function PokemonCard({ id }) {
  const dispatch = useDispatch();
  const [pokemonCard, setPokemonCard] = useState();
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(setLoading(true));

      fetch(`${API_URL}/${id}`, {
        method: 'GET',
      })
        .then(handleFetchError)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          setPokemonCard(json);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    }
  }, [id, dispatch]);

  const toggleIsFlipped = useCallback(() => {
    setIsFlipped(!isFlipped);
  }, [isFlipped]);

  if (id === 0) {
    return (
      <div className="pokemon-card pokemon-card--placeholder">
        <h2 className="pokemon-card__name">?</h2>
        <Image src={pokemonEgg} alt="Pokemon Egg" className="pokemon-card__image pokemon-card__image--egg" />
        <div>Who's Next?</div>
      </div>
    );
  }

  if (!pokemonCard) return null;

  return (
    <button className={`pokemon-card${isFlipped ? ' pokemon-card--flipped' : ''}`} onClick={toggleIsFlipped}>
      <div className="pokemon-card__front">
        {pokemonCard.name && <h2 className="pokemon-card__name">{pokemonCard.name}</h2>}

        {pokemonCard.sprites && (
          <Image
            src={pokemonCard.sprites.front_default}
            alt={pokemonCard.name}
            className="pokemon-card__image pokemon-card__image--front"
          />
        )}

        <div className="pokemon-card__front-cta" />
      </div>

      <div className="pokemon-card__back">
        {pokemonCard.name && <h2 className="pokemon-card__name">{pokemonCard.name}</h2>}

        {pokemonCard.sprites && (
          <Image
            src={pokemonCard.sprites.back_default}
            alt={pokemonCard.name}
            className="pokemon-card__image pokemon-card__image--back"
          />
        )}

        {pokemonCard.height && (
          <div>
            Height: <strong>{pokemonCard.height}</strong>
          </div>
        )}

        {pokemonCard.weight && (
          <div>
            Weight: <strong>{pokemonCard.weight}</strong>
          </div>
        )}

        {pokemonCard.base_experience && (
          <div>
            Experience: <strong>{pokemonCard.base_experience}</strong>
          </div>
        )}
      </div>
    </button>
  );
});

PokemonCard.displayName = 'PokemonCard';

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default PokemonCard;
