import { useContext, useEffect, useMemo } from 'react';
// import { useParams } from 'react-router-dom';
import {
  URL_POKEMON_DESCRIPTION,
  TYPE_COLORS,
} from '../../../constans/constans';
import { descriptionCtx } from '../../../store/description/context/descriptionContextProvider';
import getDescription from '../../../store/description/context/getDescription';
import { pokedexCtx } from '../../../store/pokemons/context/pokemonsContextProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import classes from './PokemonDetails.module.scss';

import Skill from './Skill/Skill';
import Spinner from '../../UI/Spinner/Spinner';

const drawId = (id: number) => {
  if (id < 10) {
    return '#00' + id;
  }
  if (id >= 10 && id < 100) {
    return '#0' + id;
  }
  return '#' + id;
};

const generatePokemonSpanTypes = (types: AvailavlePokemonTypes[]) =>
  types.map((type, index) => {
    let spanStyle = {
      color: `${TYPE_COLORS[type]}`,
      border: `3px solid ${TYPE_COLORS[type]}`,
    };
    return (
      <span key={type + index} style={spanStyle} className={classes.SpanType}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    );
  });

const generateSkills = (stats: IStats[]) =>
  stats.map(stat => (
    <Skill
      statValue={stat.statValue}
      statName={stat.statName}
      key={stat.statValue + stat.statName}
    />
  ));

interface IProps {
  id_url: string | null;
}

const PokemonDetails: React.FC<IProps> = ({ id_url }) => {
  const { state, fetchActions } = useContext(descriptionCtx);
  const { pokedexState } = useContext(pokedexCtx);
  // const { nameFromUrl } = useParams<{ [key: string]: string }>();
  const {
    id,
    name,
    height,
    weight,
    types,
    stats,
    description,
  } = state.pokemonDetails;

  const spanTypes = useMemo(() => generatePokemonSpanTypes(types), [types]);
  const id_format = useMemo(() => drawId(id), [id]);
  const skillsList = useMemo(() => generateSkills(stats), [stats]);

  useEffect(() => {
    if (!id_url) {
      fetchActions.fetchDescriptionFail();
    } else {
      const pokemon = pokedexState.pokemons.find(
        pokemon => pokemon.id === parseInt(id_url)
      );
      const fetchDescription = async (pokemon: IPokemon) => {
        fetchActions.fetchDescriptionStart();
        try {
          const description = await getDescription(
            URL_POKEMON_DESCRIPTION,
            id_url
          );
          fetchActions.fetchDescriptionSuccess(description, pokemon);
        } catch (err) {
          fetchActions.fetchDescriptionFail();
        }
      };
      if (pokemon) fetchDescription(pokemon);
    }
  }, [id_url]);

  useEffect(() => {
    if (state.error) console.log('Error while fetching - display alert');
  }, [state.error]);

  return (
    <div
      className={classes.Wrapper}
      onClick={e => {
        e.stopPropagation();
        console.log('click');
      }}
    >
      <div className={classes.DetailsCard}>
        {state.isLoading ? (
          <Spinner />
        ) : (
          <>
            {/* <i className={classes.closeIcon} onClick={this.props.closeModal}> */}
            <i className={classes.closeIcon}>
              <FontAwesomeIcon icon={faTimes} size='2x' />
            </i>
            <img src={state.pokemonDetails.sprites.front_default} alt='' />
            <h1 className={classes.PokemonName}>{name}</h1>
            <p className={classes.PokemonId}>{id_format}</p>
            <p className={classes.PokemonDescription}>{description}</p>
            <div className={classes.PokemonInfoContainer}>
              <p className={classes.PokemonWeight}>Weight: {weight}</p>
              <p>Height: {height}</p>
            </div>
            <div className={classes.PokemonInfoContainer}>{spanTypes}</div>
            <div className={classes.SkillsContainer}>{skillsList}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;
