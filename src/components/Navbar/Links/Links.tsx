import SingleLink from '../SingleLink/SingleLink';
import classes from './Links.module.scss';

const Links = () => {
  return (
    <div className={classes.List}>
      <SingleLink path='/' value='Pokedex' />
      <SingleLink path='/mybest' value='MyBest' />
      <SingleLink path='/projectPurpose' value='ProjectPurpose' />
      <SingleLink path='/contact' value='Contact' />
    </div>
  );
};

export default Links;
