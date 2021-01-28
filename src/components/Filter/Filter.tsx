import { useState } from 'react';
import classes from './Filter.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const useToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible(!isVisible);

  return { isVisible, toggle };
};

const Filter = () => {
  const { isVisible, toggle } = useToggle();
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
        {isVisible && <div className={classes.ButtonsWrapper}>test</div>}
      </div>
    </div>
  );
};

export default Filter;
