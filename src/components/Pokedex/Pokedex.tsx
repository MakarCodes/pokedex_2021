import { useEffect, useContext, useReducer } from 'react';
import getPokemons from '../../store/context/getPokemons';
import classes from './Pokedex.module.scss';
import { URL_ALL_POKEMONS } from '../../constans/constans';

import { pokedexCtx } from '../../store/context/pokemonsContextProvider';

import PokemonCard from './PokemonCard/PokemonCard';
import Spinner from '../UI/Spinner/Spinner';
import Filter from './Filter/Filter';
import useTypeChanger from '../../customHooks/useTypeChanger';
import filterReducer, {
  Actions,
  ActionTypes,
  initialState,
} from '../../reducers/filterReducer';

const actionsFactory = (dispatch: React.Dispatch<Actions>) => ({
  filterPokemons: (pokemons: IPokemon[], types: AvailavlePokemonTypes[]) =>
    dispatch({
      type: ActionTypes.FILTER_POKEMONS,
      payload: {
        pokemons,
        types,
      },
    }),
});

const Pokedex = () => {
  const { pokedexState, fetchActions } = useContext(pokedexCtx);
  const { types, handleTypeChange, resetTypes } = useTypeChanger();

  const [state, dispatch] = useReducer(filterReducer, initialState);
  const actions = actionsFactory(dispatch);

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
    console.log(types);
    actions.filterPokemons(pokedexState.pokemons, types);
  }, [types]);

  return (
    <div className={classes.Wrapper}>
      <Filter
        types={types}
        handleTypeChange={handleTypeChange}
        resetTypes={resetTypes}
      />
      {!pokedexState.isLoading ? (
        <div className={classes.Container}>
          {state.isFilterActive
            ? state.filteredPokemons
                .slice(0, 20)
                .map(pokemon => <PokemonCard pokemon={pokemon} />)
            : pokedexState.pokemons
                .slice(0, 20)
                .map(pokemon => <PokemonCard pokemon={pokemon} />)}
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
