import React from 'react';
import classes from './FilterButton.module.scss';

interface IProps {
  type: AvailavlePokemonTypes;
  handleTypeBtnClick: (
    type: AvailavlePokemonTypes,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
const FilterButton: React.FC<IProps> = ({ type, handleTypeBtnClick }) => (
  <button
    onClick={e => handleTypeBtnClick(type, e)}
    className={classes.FilterBtn}
  >
    {type}
  </button>
);

export default FilterButton;
