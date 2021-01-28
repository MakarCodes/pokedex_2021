import React from 'react';
import classes from './FilterButton.module.scss';

interface IProps {
  type: AvailavlePokemonTypes;
  handleTypeBtnClick: (type: AvailavlePokemonTypes) => void;
}
const FilterButton: React.FC<IProps> = ({ type, handleTypeBtnClick }) => (
  <button
    onClick={() => handleTypeBtnClick(type)}
    className={classes.FilterBtn}
  >
    {type}
  </button>
);

export default FilterButton;
