import { useState } from 'react';

const useTypeChanger = () => {
  const [types, setTypes] = useState<AvailavlePokemonTypes[]>([]);

  const handleTypeChange = (type: AvailavlePokemonTypes) => {
    switch (types.length) {
      case 0: {
        setTypes([type]);
        break;
      }
      case 1: {
        if (types.indexOf(type) >= 0) {
          setTypes([]);
        } else {
          setTypes([...types, type]);
        }
        break;
      }
      case 2: {
        const idx = types.indexOf(type);
        if (idx >= 0) {
          const newTypes = [...types];
          newTypes.splice(idx, 1);
          setTypes(newTypes);
        } else {
          const newTypes = [...types];
          newTypes.splice(1, 1, type);
          setTypes(newTypes);
        }
        break;
      }
    }
  };

  const handlePokemonFiltering = (
    pokemons: IPokemon[],
    types: AvailavlePokemonTypes[]
  ) => {
    if (types.length === 1) {
      return pokemons.filter(pokemon => pokemon.types.indexOf(types[0]) >= 0);
    }
    if (types.length === 2) {
      return pokemons.filter(pokemon =>
        pokemon.types.every(type => types.indexOf(type) >= 0)
      );
    }
    return pokemons;
  };

  return { types, handleTypeChange, handlePokemonFiltering };
};

export default useTypeChanger;
