import { useState, useMemo } from 'react';
import classes from './Filter.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import { POKEMON_TYPES, TYPE_COLORS } from '../../../constans/constans';
import FilterButton from '../FilterButton/FilterButton';

const useToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible(!isVisible);

  return { isVisible, toggle };
};

interface IProps {
  types: AvailavlePokemonTypes[];
  handleTypeChange: (type: AvailavlePokemonTypes) => void;
}

const setButtonBGColor = (
  btnType: AvailavlePokemonTypes,
  currentTypes: AvailavlePokemonTypes[],
  TYPE_COLORS: ITypes
) => {
  const idx = currentTypes.indexOf(btnType);
  if (idx !== -1) {
    return TYPE_COLORS[btnType];
  }
  return '';
};

const Filter: React.FC<IProps> = ({ types, handleTypeChange }) => {
  const { isVisible, toggle } = useToggle();

  const filterButtonsToRender = useMemo(
    () =>
      POKEMON_TYPES.map((pokemonType, idx) => (
        <FilterButton
          type={pokemonType}
          handleTypeChange={handleTypeChange}
          key={pokemonType + idx}
          bgColor={setButtonBGColor(pokemonType, types, TYPE_COLORS)}
        />
      )),
    [POKEMON_TYPES, handleTypeChange, types]
  );
  return (
    <div className={classes.Container}>
      <div className={classes.Wrapper}>
        <h2 className={classes.FilterTitle}>
          Discover your favorite Pokemon species by selecting specific types!
        </h2>
        <p className={classes.Note}>
          Please note, that maximum of two types can be chosen simultaneously.
        </p>
        <div>
          <button className={classes.ToggleBtn} onClick={() => toggle()}>
            <i>
              <FontAwesomeIcon icon={faFilter} size='2x' />
            </i>
          </button>
        </div>
        {isVisible && (
          <div className={classes.ButtonsWrapper}>{filterButtonsToRender}</div>
        )}
      </div>
    </div>
  );
};

export default Filter;
