//shared types and interfces

interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  sprites: {
    front_default: string;
    back_default: string;
  };
}
