import PokemonLogo from '../../../assets/images/Pokemon-LOGO.png';
import classes from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <div className={classes.Logo}>
      <img src={PokemonLogo} alt='Page Logo Title' />
    </div>
  );
};

export default Logo;
