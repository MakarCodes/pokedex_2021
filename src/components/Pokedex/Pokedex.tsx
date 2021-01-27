import { useEffect, useContext } from 'react';
import { pokedexCtx } from '../../store/context/pokemonsContextProvider';
import PokemonCard from '../PokemonCard/PokemonCard';
import classes from './Pokedex.module.scss';

const Pokedex = () => {
  const { pokedexState, fetchActions } = useContext(pokedexCtx);
  useEffect(() => {
    fetchActions.fetchPokemons();
  }, []);

  useEffect(() => {
    console.log(pokedexState);
  }, [pokedexState]);
  return (
    <div className={classes.Container}>
      {pokedexState.pokemons.map(pokemon => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Pokedex;
