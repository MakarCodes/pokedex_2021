export const POKEMON_TYPES = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'fairy',
  'dark',
];

interface ITypes {
  [key: string]: string;
}

export const TYPE_COLORS: ITypes = {
  poison: '#C68CC6',
  grass: '#AEDE96',
  fire: '#F6B282',
  flying: '#CABCF6',
  water: '#A4BCF6',
  bug: '#CAD479',
  normal: '#CACAAE',
  electric: '#FAE282',
  ground: '#ECD9A4',
  fairy: '#F4C1CD',
  fighting: '#D9827E',
  psychic: '#FA9AB7',
  rock: '#D4C687',
  ghost: '#A99AC1',
  ice: '#C1E7E7',
  steel: '#D4D4E2',
  dragon: '#A886F9',
  dark: '#A89990',
};
