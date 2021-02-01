import React from 'react';
import classes from './FilterButton.module.scss';

interface IProps {
  type: AvailavlePokemonTypes;
  bgColor: string;
  handleTypeChange: (type: AvailavlePokemonTypes) => void;
}
const FilterButton: React.FC<IProps> = ({
  type,
  handleTypeChange,
  bgColor,
}) => (
  <button
    onClick={e => handleTypeChange(type)}
    className={classes.FilterBtn}
    style={{ backgroundColor: `${bgColor}` }}
  >
    {type}
  </button>
);

export default FilterButton;
