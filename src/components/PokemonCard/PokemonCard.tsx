import React, { useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWeightHanging,
  faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons';

import classes from './PokemonCard.module.scss';

import { TYPE_COLORS } from '../../constans/constans';

import { IPokemon } from '../../store/reducer/pokemonReducer';

interface IProps {
  pokemon: IPokemon;
}

const generateBgDependingOnType = (pokemon: IPokemon) => {
  const bgColorTypes: string[] = [];
  pokemon.types.forEach((pokemonType, index) => {
    if (index === 0) {
      bgColorTypes.push(TYPE_COLORS[pokemonType]);
      bgColorTypes.push(TYPE_COLORS[pokemonType]);
    } else {
      bgColorTypes.splice(1, 1, TYPE_COLORS[pokemonType]);
    }
  });
  return {
    background: `linear-gradient(45deg, ${bgColorTypes[0]} 50%, ${bgColorTypes[1]} 50%`,
  };
};

const handleMouseMoveOverImage = (
  event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  pokemonSprite: string
) => {
  const target = event.target as HTMLImageElement;
  return (target.src =
    pokemonSprite || 'https://img.icons8.com/bubbles/100/000000/no-image.png');
};

const drawTypes = (types: string[]) => {
  return types
    .map(
      pokemonType => pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1)
    )
    .join('/');
};

const PokemonCard: React.FC<IProps> = ({ pokemon }) => {
  const { id, name, height, weight, types, sprites } = pokemon;
  const cardBg = useMemo(() => generateBgDependingOnType(pokemon), [pokemon]);
  const pokemonTypes = useMemo(() => drawTypes(types), [pokemon]);

  return (
    <div
      // onClick={() => {
      //   clicked(pokemon, bgColorTypes);
      // }}
      className={classes.PokemonCard}
      style={cardBg}
    >
      <img
        onMouseOver={e => handleMouseMoveOverImage(e, sprites.back_default)}
        onMouseOut={e => handleMouseMoveOverImage(e, sprites.front_default)}
        src={
          sprites.front_default ||
          'https://img.icons8.com/bubbles/100/000000/no-image.png'
        }
        alt='pokemon-icons'
      />
      <h1 className={classes.PokemonName}>{name}</h1>
      <p className={classes.PokemonId}>{id}</p>
      <div className={classes.Info}>
        <div className={classes.DetailInfo}>
          <i>
            <FontAwesomeIcon icon={faWeightHanging} size='2x' />
          </i>
          <span className={classes.WeightHeight}>{weight}</span>
        </div>
        <div className={classes.DetailInfo}>
          <i>
            <FontAwesomeIcon icon={faSortAmountUp} size='2x' />
          </i>
          <span className={classes.WeightHeight}>{height}</span>
        </div>
      </div>
      <div className={classes.Details}>DETAILS</div>
      <p className={classes.Type}>Type: {pokemonTypes}</p>
    </div>
  );
};

export default PokemonCard;
