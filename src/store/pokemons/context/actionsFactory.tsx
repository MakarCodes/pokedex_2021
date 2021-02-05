import { Actions, ActionTypes } from '../reducer/pokemonReducer';

export const actionsFactory = (dispatch: React.Dispatch<Actions>) => ({
  fetchPokemonsStart: () => dispatch({ type: ActionTypes.FETCHING_DATA_START }),
  fetchPokemonsSuccess: (pokemons: IPokemon[]) =>
    dispatch({
      type: ActionTypes.FETCHING_DATA_SUCCESS,
      payload: { pokemons },
    }),
  fetchPokemonsFail: () => dispatch({ type: ActionTypes.FETCHING_DATA_FAIL }),
});
