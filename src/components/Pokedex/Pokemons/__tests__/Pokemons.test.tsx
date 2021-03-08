import { render, screen } from '@testing-library/react';
import Pokemons from '../Pokemons';
const mockedPokemons: IPokemon[] = [
  {
    id: 1,
    name: 'pok1',
    height: 100,
    weight: 100,
    types: ['fire'],
    sprites: { front_default: 'front', back_default: 'back' },
    stats: [{ statName: 'fight', statValue: 100 }],
  },
  {
    id: 2,
    name: 'pok1',
    height: 100,
    weight: 100,
    types: ['fire'],
    sprites: { front_default: 'front', back_default: 'back' },
    stats: [{ statName: 'fight', statValue: 100 }],
  },
  {
    id: 3,
    name: 'pok1',
    height: 100,
    weight: 100,
    types: ['fire'],
    sprites: { front_default: 'front', back_default: 'back' },
    stats: [{ statName: 'fight', statValue: 100 }],
  },
  {
    id: 4,
    name: 'pok1',
    height: 100,
    weight: 100,
    types: ['fire'],
    sprites: { front_default: 'front', back_default: 'back' },
    stats: [{ statName: 'fight', statValue: 100 }],
  },
  {
    id: 5,
    name: 'pok1',
    height: 100,
    weight: 100,
    types: ['fire'],
    sprites: { front_default: 'front', back_default: 'back' },
    stats: [{ statName: 'fight', statValue: 100 }],
  },
];

describe('PaginatedTable component is correct', () => {
  it('if renders appropriately with given props', () => {
    render(<Pokemons pokemonsToDisplay={mockedPokemons} types={['fire']} />);
    const pokemonCardsContainer = screen.getByTestId('pokemonCardContainer');
    expect(pokemonCardsContainer).toBeInTheDocument();
    expect(pokemonCardsContainer.childElementCount).toBe(mockedPokemons.length);
  });
});
