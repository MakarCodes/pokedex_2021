interface IState {
  pokemonsToDisplay: IPokemon[];
  isFilterActive: boolean;
}

export const initialState: IState = {
  pokemonsToDisplay: [],
  isFilterActive: false,
};

export enum ActionTypes {
  SET_POKEMONS_TO_DISPLAY = 'SET_POKEMONS_TO_DISPLAY',
  FILTER_POKEMONS = 'FILTER_POKEMONS',
}

export type Actions =
  | {
      type: 'FILTER_POKEMONS';
      payload: {
        pokemons: IPokemon[];
        types: AvailavlePokemonTypes[];
      };
    }
  | {
      type: 'SET_POKEMONS_TO_DISPLAY';
      payload: {
        pokemons: IPokemon[];
      };
    };

const filterPokemonsByType = (
  pokemons: IPokemon[],
  types: AvailavlePokemonTypes[]
) => {
  if (types.length === 1) {
    return pokemons.filter(pokemon => pokemon.types.indexOf(types[0]) >= 0);
  }
  if (types.length === 2) {
    return pokemons.filter(pokemon =>
      pokemon.types.every(type => types.indexOf(type) >= 0)
    );
  }
  return pokemons;
};

const filterPokemons = (state: IState, action: Actions) => {
  if (action.type === 'FILTER_POKEMONS') {
    const { pokemons, types } = action.payload;
    const pokemonsToDisplay = filterPokemonsByType(pokemons, types);
    if (types.length) {
      return {
        pokemonsToDisplay,
        isFilterActive: true,
      };
    }
    return {
      pokemonsToDisplay,
      isFilterActive: false,
    };
  } else {
    return state;
  }
};

const setPokemonsToDisplay = (state: IState, action: Actions) => {
  const { pokemons } = action.payload;
  return {
    pokemonsToDisplay: pokemons,
    isFilterActive: false,
  };
};

const filterReducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SET_POKEMONS_TO_DISPLAY:
      return setPokemonsToDisplay(state, action);
    case ActionTypes.FILTER_POKEMONS:
      return filterPokemons(state, action);
    default:
      return state;
  }
};

export default filterReducer;
