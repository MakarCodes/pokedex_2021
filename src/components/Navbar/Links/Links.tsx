import SingleLink from '../SingleLink/SingleLink';
import classes from './Links.module.scss';

const Links = () => {
  return (
    <div className={classes.List}>
      <SingleLink path='/' value='Pokedex' />
      <SingleLink path='/' value='MyBest' />
      <SingleLink path='/' value='Purpose' />
      <SingleLink path='/' value='Contact' />
    </div>
  );
};

export default Links;
