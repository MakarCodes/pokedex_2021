import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { URL_POKEMON_DESCRIPTION } from '../../../constans/constans';
import { descriptionCtx } from '../../../store/description/context/descriptionContextProvider';
import getDescription from '../../../store/description/context/getDescription';
import { pokedexCtx } from '../../../store/pokemons/context/pokemonsContextProvider';

interface IProps {
  id: string | null;
}

const PokemonDetails: React.FC<IProps> = ({ id }) => {
  const { state, fetchActions } = useContext(descriptionCtx);
  const { pokedexState } = useContext(pokedexCtx);
  const { name } = useParams<{ [key: string]: string }>();
  // if id or name change -> get correct pokemon from store
  // reducer do trzymania stanu pokemona lub globalny stan
  useEffect(() => {
    if (!id) {
      fetchActions.fetchDescriptionFail();
      //display error or something
    } else {
      const pokemon = pokedexState.pokemons.find(
        pokemon => pokemon.id === parseInt(id)
      );
      const fetchDescription = async (pokemon: IPokemon) => {
        fetchActions.fetchDescriptionStart();
        try {
          const description = await getDescription(URL_POKEMON_DESCRIPTION, id);
          fetchActions.fetchDescriptionSuccess(description, pokemon);
        } catch (err) {
          fetchActions.fetchDescriptionFail();
        }
      };
      if (pokemon) fetchDescription(pokemon);
    }
  }, [id]);

  useEffect(() => {
    console.log(state.description, state.pokemonDetails);
  }, [state.pokemonDetails]);
  return <div>test</div>;
};

export default PokemonDetails;
