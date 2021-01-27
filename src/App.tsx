import React from 'react';
import Layout from './components/Layout/Layout';
import Routes from './components/Routes/Routes';
import { pokedexCtx } from './store/context/pokemonsContextProvider';

const App = () => {
  const { pokedexState, fetchActions } = React.useContext(pokedexCtx);
  React.useEffect(() => {
    fetchActions.fetchPokemons();
  }, []);
  React.useEffect(() => {
    console.log(pokedexState);
  }, [pokedexState]);
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
