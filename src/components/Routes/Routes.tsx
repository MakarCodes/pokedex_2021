import { Route, Switch } from 'react-router-dom';
import BestPokemons from '../BestPokemons/BestPokemons';
import Contact from '../Contact/Contact';
import Pokedex from '../Pokedex/Pokedex';
import Purpose from '../Purpose/Purpose';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route e path='/contact' component={Contact} />
        <Route e path='/projectPurpose' component={Purpose} />
        <Route e path='/mybest' component={BestPokemons} />
        <Route exact path='/' component={Pokedex} />
      </Switch>
    </>
  );
};

export default Routes;
