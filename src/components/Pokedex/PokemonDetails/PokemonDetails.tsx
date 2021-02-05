import { useContext, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { URL_POKEMON_DESCRIPTION } from '../../../constans/constans';
import { descriptionCtx } from '../../../store/description/context/descriptionContextProvider';
import getDescription from '../../../store/description/context/getDescription';

interface IProps {
  id: string | null;
}

const PokemonDetails: React.FC<IProps> = ({ id }) => {
  const { state, fetchActions } = useContext(descriptionCtx);
  const { name } = useParams<{ [key: string]: string }>();
  // if id or name change -> get correct pokemon from store
  useEffect(() => {
    const fetchPokemons = async () => {
      fetchActions.fetchDescriptionStart();
      if (id) {
        try {
          const description = await getDescription(URL_POKEMON_DESCRIPTION, id);
          fetchActions.fetchDescriptionSuccess(description);
        } catch (err) {
          fetchActions.fetchDescriptionFail();
        }
      } else {
        fetchActions.fetchDescriptionFail();
      }
    };
    fetchPokemons();
  }, []);
  useEffect(() => {
    console.log(state.description);
  }, [state.description]);
  return <div>test</div>;
};

export default PokemonDetails;
