import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image/Image';
import './PokemonCard.scss';

const PokemonCard = memo(function PokemonCard({ pokemonData }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleIsFlipped = useCallback(() => {
    setIsFlipped(!isFlipped);
  }, [isFlipped]);

  if (!pokemonData) return null;

  return (
    <button className={`pokemon-card${isFlipped ? ' pokemon-card--flipped' : ''}`} onClick={toggleIsFlipped}>
      <div className="pokemon-card__front">
        {pokemonData.name && <h2 className="pokemon-card__name">{pokemonData.name}</h2>}

        {pokemonData.sprites && (
          <Image
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            className="pokemon-card__image pokemon-card__image--front"
          />
        )}

        <div className="pokemon-card__front-cta" />
      </div>

      <div className="pokemon-card__back">
        {pokemonData.name && <h2 className="pokemon-card__name">{pokemonData.name}</h2>}

        {pokemonData.sprites && (
          <Image
            src={pokemonData.sprites.back_default}
            alt={pokemonData.name}
            className="pokemon-card__image pokemon-card__image--back"
          />
        )}

        {pokemonData.height && (
          <div>
            Height: <strong>{pokemonData.height}</strong>
          </div>
        )}

        {pokemonData.weight && (
          <div>
            Weight: <strong>{pokemonData.weight}</strong>
          </div>
        )}

        {pokemonData.base_experience && (
          <div>
            Experience: <strong>{pokemonData.base_experience}</strong>
          </div>
        )}
      </div>
    </button>
  );
});

PokemonCard.displayName = 'PokemonCard';

PokemonCard.propTypes = {
  pokemonData: PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number,
    sprites: PropTypes.shape({
      front_default: PropTypes.string,
      back_default: PropTypes.string,
      base_experience: PropTypes.number,
    }),
  }),
};

export default PokemonCard;
