export interface IState {
  pokemons: IPokemon[];
  isLoading: boolean;
  error: boolean;
}

export const initialState = {
  pokemons: [],
  isLoading: false,
  error: false,
};

export enum ActionTypes {
  FETCHING_DATA_START = 'FETCHING_DATA_START',
  FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS',
  FETCHING_DATA_FAIL = 'FETCHING_DATA_FAIL',
}

export type Actions =
  | {
      type: 'FETCHING_DATA_START';
    }
  | {
      type: 'FETCHING_DATA_SUCCESS';
      payload: { pokemons: IPokemon[] };
    }
  | {
      type: 'FETCHING_DATA_FAIL';
    };

const pokemonsReducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.FETCHING_DATA_START:
      return { ...state, isLoading: true };
    case ActionTypes.FETCHING_DATA_SUCCESS:
      return { ...state, isLoading: false, pokemons: action.payload.pokemons };
    case ActionTypes.FETCHING_DATA_FAIL:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
};

export default pokemonsReducer;
