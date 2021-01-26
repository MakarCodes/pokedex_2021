import classes from './Hamburger.module.scss';

interface IProps {
  isOpen: boolean;
  toggle: () => void;
}

const Hamburger: React.FC<IProps> = ({ isOpen, toggle }) => {
  return (
    <>
      <button
        className={
          isOpen
            ? `${classes.Hamburger} ${classes.HamburgerOpen}`
            : classes.Hamburger
        }
        onClick={() => toggle()}
      >
        <div />
        <div />
        <div />
      </button>
    </>
  );
};

export default Hamburger;
