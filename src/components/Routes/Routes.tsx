import { Route, Switch, useLocation } from 'react-router-dom';
import { Location } from 'history';
import BestPokemons from '../BestPokemons/BestPokemons';
import Contact from '../Contact/Contact';
import Pokedex from '../Pokedex/Pokedex';
import Gallery from '../Gallery/Gallery';
import RouteModal from '../UI/RouteModal/RouteModal';
import PokemonDetails from '../Pokedex/PokemonDetails/PokemonDetails';
import { useQuery } from '../../customHooks/useQuery';

interface ILocationState {
  pathname: string;
  state: { background: Location };
}

const Routes = () => {
  const location: ILocationState = useLocation();
  const background = location.state && location.state.background;
  const id = useQuery('id', location);
  return (
    <>
      <Switch location={background || location}>
        <Route path='/contact' component={Contact} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/mybest' component={BestPokemons} />
        <Route exact path='/' component={Pokedex} />
      </Switch>
      {background && (
        <Route
          path='/:name'
          children={
            <RouteModal>
              <PokemonDetails id_url={id} />
            </RouteModal>
          }
        />
      )}
    </>
  );
};

export default Routes;
