import { createContext, useReducer } from 'react';
import pokemonsReducer, {
  IState,
  initialState,
} from '../reducer/pokemonReducer';
import { actionsFactory, getPokemons } from './actionsFactory';

export interface IContext {
  pokedexState: IState;
  fetchActions: {
    fetchPokemons: () => void;
  };
}

const initCtx: IContext = {
  pokedexState: initialState,
  fetchActions: {
    fetchPokemons: () => {},
  },
};

export const pokedexCtx = createContext(initCtx);

const PokemonsContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [pokedexState, dispatch] = useReducer(pokemonsReducer, initialState);
  const actions = actionsFactory(dispatch);
  const fetchActions = {
    fetchPokemons: async () => {
      actions.fetchPokemonsStart();
      try {
        const pokemons = await getPokemons(
          'https://pokeapi.co/api/v2/pokemon?offset=0&limit=500'
        );
        actions.fetchPokemonsSuccess(pokemons);
      } catch (err) {
        actions.fetchPokemonsFail();
      }
    },
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
