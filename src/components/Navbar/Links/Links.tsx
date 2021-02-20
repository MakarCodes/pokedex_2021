import SingleLink from '../SingleLink/SingleLink';
import classes from './Links.module.scss';

interface IProps {
  isOpen: boolean;
}

const Links: React.FC<IProps> = ({ isOpen }) => {
  return (
    <div
      className={isOpen ? `${classes.List} ${classes.ListOpen}` : classes.List}
    >
      <SingleLink path='/' value='Pokedex' />
      <SingleLink path='/mybest' value='MyBest' />
      <SingleLink path='/gallery' value='Gallery' />
      <SingleLink path='/contact' value='Contact' />
    </div>
  );
};

export default Links;
