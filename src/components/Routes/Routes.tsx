import { Route, Switch, useLocation } from 'react-router-dom';
import { Location } from 'history';
import BestPokemons from '../BestPokemons/BestPokemons';
import Contact from '../Contact/Contact';
import Pokedex from '../Pokedex/Pokedex';
import Purpose from '../Purpose/Purpose';
import RouteModal from '../UI/RouteModal/RouteModal';
import PokemonDetails from '../Pokedex/PokemonDetails/PokemonDetails';
import { useEffect } from 'react';

interface ILocationState {
  pathname: string;
  state: { background: Location };
}

const Routes = () => {
  const location: ILocationState = useLocation();
  const background = location.state && location.state.background;
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <Switch location={background || location}>
        <Route path='/contact' component={Contact} />
        <Route path='/projectPurpose' component={Purpose} />
        <Route path='/mybest' component={BestPokemons} />
        <Route exact path='/' component={Pokedex} />
      </Switch>
      {background && (
        <Route
          path='/:name'
          children={
            <RouteModal>
              <PokemonDetails />
            </RouteModal>
          }
        />
      )}
    </>
  );
};

export default Routes;
