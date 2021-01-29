import { useEffect, useContext } from 'react';
import getPokemons from '../../store/context/getPokemons';
import classes from './Pokedex.module.scss';
import { URL_ALL_POKEMONS } from '../../constans/constans';

import { pokedexCtx } from '../../store/context/pokemonsContextProvider';

import PokemonCard from './PokemonCard/PokemonCard';
import Spinner from '../UI/Spinner/Spinner';
import Filter from './Filter/Filter';
import useTypeChanger from '../../customHooks/useTypeChanger';

const Pokedex = () => {
  const { pokedexState, fetchActions } = useContext(pokedexCtx);
  const { types, handleTypeChange, handlePokemonFiltering } = useTypeChanger();

  useEffect(() => {
    console.log(types);
    const result = handlePokemonFiltering(pokedexState.pokemons, types);
    console.log(result);
  }, [types]);

  useEffect(() => {
    console.log(pokedexState);
  }, [pokedexState]);

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

  const handleTypeBtnClick = (
    type: AvailavlePokemonTypes,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as HTMLButtonElement;
    console.log('You selected type', type);
    target.style.backgroundColor = 'red';
    handleTypeChange(type);
  };

  return (
    <div className={classes.Wrapper}>
      <Filter handleTypeBtnClick={handleTypeBtnClick} />
      {!pokedexState.isLoading ? (
        <div className={classes.Container}>
          {pokedexState.pokemons.slice(0, 20).map(pokemon => (
            <PokemonCard pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <div className={classes.SpinnerContainer}>
          <p className={classes.LoadingText}>
            Pateince young padawan... Data is loading... :)
          </p>
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
