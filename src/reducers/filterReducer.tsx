// updating types state on buttons click
// if types.length === 0 -> types.push(type)
// if types.length === 1 -> types.includes(type) -> remove else add
// if types.length === 2 ->  types.includes(type) -> remove else splice with last

//state wtih types -> adding / removing on button click
// if state with types changes and types.length -> dispach filtering action and update state and set filter to active
// if state with types changes and types.length===0 -> dispatch action and set filet to false
// if filter is true  -> display those pokemons
// if filter is false -> display pokemons from initial fetch

// types = [typeOne, typeTwo]

// //1 type types.length === 1
// pokemons.filter(pokemon => pokemon.types.indexOf(type) > 0)

// // 2 types types.length === 2
// pokemons.filter(pokemon => pokemon.types.indexOf(typeOne) > 0 && pokemon.types.indexOf(typeTwo) > 0)
// pokemons.filter(pokemon => pokemon.types.every(type => pokemon.types.include(type)))

// //3 types.length === 0 -> take from store

interface IState {
  filteredPokemons: IPokemon[];
  isFilterActive: boolean;
}

export const initialState: IState = {
  filteredPokemons: [],
  isFilterActive: false,
};

export enum ActionTypes {
  FILTER_POKEMONS = 'FILTER_POKEMONS',
}

export type Actions = {
  type: 'FILTER_POKEMONS';
  payload: {
    pokemons: IPokemon[];
    types: AvailavlePokemonTypes[];
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

const filterPokemons = (state: IState, actions: Actions) => {
  const { pokemons, types } = actions.payload;
  const filteredPokemons = filterPokemonsByType(pokemons, types);
  if (types.length) {
    return {
      filteredPokemons,
      isFilterActive: true,
    };
  }
  return {
    filteredPokemons,
    isFilterActive: false,
  };
};

const filterReducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.FILTER_POKEMONS:
      return filterPokemons(state, action);
    default:
      return state;
  }
};

export default filterReducer;
