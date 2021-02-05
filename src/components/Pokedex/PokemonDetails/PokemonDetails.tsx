import { useEffect } from 'react';

const PokemonDetails = () => {
  useEffect(() => {
    console.log('working good');
  }, []);
  return <div>test</div>;
};

export default PokemonDetails;
