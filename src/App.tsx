import React, { useContext, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Routes from './components/Routes/Routes';
import { URL_ALL_POKEMONS } from './constans/constans';
import getPokemons from './store/context/getPokemons';
import { pokedexCtx } from './store/context/pokemonsContextProvider';

const App = () => {
  const { fetchActions } = useContext(pokedexCtx);

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
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
