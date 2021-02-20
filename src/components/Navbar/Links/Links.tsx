import SingleLink from '../SingleLink/SingleLink';
import classes from './Links.module.scss';

interface IProps {
  isOpen: boolean;
  toggle: () => void;
}

const Links: React.FC<IProps> = ({ isOpen, toggle }) => {
  return (
    <div
      className={isOpen ? `${classes.List} ${classes.ListOpen}` : classes.List}
    >
      <SingleLink path='/' value='Pokedex' toggle={toggle} />
      <SingleLink path='/mybest' value='MyBest' toggle={toggle} />
      <SingleLink path='/gallery' value='Gallery' toggle={toggle} />
      <SingleLink path='/contact' value='Contact' toggle={toggle} />
    </div>
  );
};

export default Links;
