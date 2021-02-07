import React from 'react';
import PaginationPanel from '../Pagination/PaginationPanel/PaginationPanel';
import usePagination from '../Pagination/usePagination/usePagination';
import PokemonCard from '../PokemonCard/PokemonCard';
import classes from '../Pokedex.module.scss';
import { useEffect } from 'react';

interface IProps {
  pokemonsToDisplay: IPokemon[];
  types: AvailavlePokemonTypes[];
}
const Pokemons: React.FC<IProps> = ({ pokemonsToDisplay, types }) => {
  const [paginationState, paginationActions] = usePagination(
    pokemonsToDisplay,
    20
  );
  useEffect(() => {
    paginationActions.goToFirstPage();
  }, [types]);
  return (
    <>
      <div className={classes.Container}>
        {paginationState.entriesOnSelectedPage
          .slice(0, 20)
          .map((pokemon, idx) => (
            <PokemonCard pokemon={pokemon} key={pokemon.name + idx} />
          ))}
      </div>
      <div>
        <PaginationPanel
          paginationState={paginationState}
          paginationActions={paginationActions}
        />
      </div>
    </>
  );
};

export default Pokemons;
