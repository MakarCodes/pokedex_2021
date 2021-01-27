import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './index.css';
import PokemonsContextProvider from './store/context/pokemonsContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonsContextProvider>
        <App />
      </PokemonsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
