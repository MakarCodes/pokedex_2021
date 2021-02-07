//shared types and interfces

interface IStats {
  statName: string;
  statValue: number;
}

interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: AvailavlePokemonTypes[];
  sprites: {
    front_default: string;
    back_default: string;
  };
  stats: Array<IStats>;
}

type AvailavlePokemonTypes =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'fairy'
  | 'dark';

interface ITypes {
  [key: string]: string;
}
