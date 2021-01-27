import { useEffect, useContext } from 'react';
import getPokemons from '../../store/context/getPokemons';
import classes from './Pokedex.module.scss';
import { URL_ALL_POKEMONS } from '../../constans/constans';

import { pokedexCtx } from '../../store/context/pokemonsContextProvider';

import PokemonCard from '../PokemonCard/PokemonCard';
import Spinner from '../Spinner/Spinner';

const Pokedex = () => {
  const { pokedexState, fetchActions } = useContext(pokedexCtx);
  useEffect(() => {
    const fetchPokemons = async () => {
      fetchActions.fetchPokemonsStart();
      try {
        const pokemons = await getPokemons(URL_ALL_POKEMONS);
        fetchActions.fetchPokemonsSuccess(pokemons);
      } catch (err) {
        fetchActions.fetchPokemonsFail();
      }
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    console.log(pokedexState);
  }, [pokedexState]);
  return (
    <div className={classes.Container}>
      {!pokedexState.isLoading ? (
        pokedexState.pokemons
          .slice(0, 20)
          .map(pokemon => <PokemonCard pokemon={pokemon} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Pokedex;
