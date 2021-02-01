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

  // const handleBackgroundColorChange

  return { types, handleTypeChange };
};

export default useTypeChanger;
