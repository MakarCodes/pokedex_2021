import { useEffect, useContext, useReducer } from 'react';
import classes from './Pokedex.module.scss';

import { pokedexCtx } from '../../store/pokemons/context/pokemonsContextProvider';

import Spinner from '../UI/Spinner/Spinner';
import Filter from './Filter/Filter';
import useTypeChanger from '../../customHooks/useTypeChanger';
import filterReducer, {
  Actions,
  ActionTypes,
  initialState,
} from '../../reducers/filterReducer';
import Pokemons from './Pokemons/Pokemons';

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
  const { pokedexState } = useContext(pokedexCtx);
  const { pokemons } = pokedexState;
  const { types, handleTypeChange, resetTypes } = useTypeChanger();

  const [state, dispatch] = useReducer(filterReducer, initialState);
  const actions = actionsFactory(dispatch);

  useEffect(() => {
    if (pokemons)
      dispatch({
        type: ActionTypes.SET_POKEMONS_TO_DISPLAY,
        payload: {
          pokemons: pokemons,
        },
      });
  }, [pokemons]);

  useEffect(() => {
    actions.filterPokemons(pokemons, types);
  }, [types, pokemons]);

  return (
    <div className={classes.Wrapper}>
      <Filter
        types={types}
        handleTypeChange={handleTypeChange}
        resetTypes={resetTypes}
      />
      {!pokedexState.isLoading ? (
        <Pokemons pokemonsToDisplay={state.pokemonsToDisplay} types={types} />
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
