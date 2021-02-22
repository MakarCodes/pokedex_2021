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
  setPokemonsToDisplay: (pokemons: IPokemon[]) =>
    dispatch({
      type: ActionTypes.SET_POKEMONS_TO_DISPLAY,
      payload: {
        pokemons: pokemons,
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
    if (pokemons) actions.setPokemonsToDisplay(pokemons);
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
      {pokedexState.error && (
        <p className={classes.Error}>
          Sorry an ERROR has occured, data couldn't be loaded - please try later
          or check your url
        </p>
      )}
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
