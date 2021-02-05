import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './RouteModal.module.scss';

const RouteModal: React.FC<React.ReactNode> = ({ children }) => {
  const history = useHistory();

  const closeModal = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    history.goBack();
  };

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className={classes.Wrapper}>
      <span className={classes.Close} onClick={closeModal}>
        <svg
          className={classes.CloseIcon}
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clip-rule='evenodd'
          />
        </svg>
      </span>
      {children}
    </div>
  );
};

export default RouteModal;
