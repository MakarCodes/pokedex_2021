import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './index.css';
import PokemonsContextProvider from './store/pokemons/context/pokemonsContextProvider';
import ViewportSizeContextProvider from './contexts/ViewportSizeContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ViewportSizeContextProvider>
        <PokemonsContextProvider>
          <App />
        </PokemonsContextProvider>
      </ViewportSizeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
