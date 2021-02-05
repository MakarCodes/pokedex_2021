import { createContext, useReducer } from 'react';
import pokemonsReducer, {
  IState,
  initialState,
} from '../reducer/pokemonReducer';
import { actionsFactory } from './actionsFactory';

export interface IContext {
  pokedexState: IState;
  fetchActions: {
    fetchPokemonsStart: () => void;
    fetchPokemonsSuccess: (pokemons: IPokemon[]) => void;
    fetchPokemonsFail: () => void;
  };
}

const initCtx: IContext = {
  pokedexState: initialState,
  fetchActions: {
    fetchPokemonsStart: () => {},
    fetchPokemonsSuccess: () => {},
    fetchPokemonsFail: () => {},
  },
};

export const pokedexCtx = createContext(initCtx);

const PokemonsContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [pokedexState, dispatch] = useReducer(pokemonsReducer, initialState);
  const actions = actionsFactory(dispatch);
  const {
    fetchPokemonsStart,
    fetchPokemonsSuccess,
    fetchPokemonsFail,
  } = actions;
  const fetchActions = {
    fetchPokemonsStart,
    fetchPokemonsSuccess,
    fetchPokemonsFail,
  };
  const providerValue = {
    pokedexState,
    fetchActions,
  };
  return (
    <pokedexCtx.Provider value={providerValue}>{children}</pokedexCtx.Provider>
  );
};

export default PokemonsContextProvider;
