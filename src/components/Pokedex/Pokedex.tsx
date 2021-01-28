import { useEffect, useContext } from 'react';
import getPokemons from '../../store/context/getPokemons';
import classes from './Pokedex.module.scss';
import { URL_ALL_POKEMONS } from '../../constans/constans';

import { pokedexCtx } from '../../store/context/pokemonsContextProvider';

import PokemonCard from '../PokemonCard/PokemonCard';
import Spinner from '../Spinner/Spinner';
import Filter from '../Filter/Filter';

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
      <Filter />
      {!pokedexState.isLoading ? (
        pokedexState.pokemons
          .slice(0, 20)
          .map(pokemon => <PokemonCard pokemon={pokemon} />)
      ) : (
        <div>
          <p>Pateince young padawan... Data is loading... :)</p>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Pokedex;

// types = [typeOne, typeTwo]

// //1 type types.length === 1
// pokemons.filter(pokemon => pokemon.types.indexOf(type) > 0)

// // 2 types types.length === 2
// pokemons.filter(pokemon => pokemon.types.indexOf(typeOne) > 0 && pokemon.types.indexOf(typeTwo) > 0)
// pokemons.filter(pokemon => pokemon.types.every(type => pokemon.types.include(type)))

// //3 types.length === 0 -> take from store
