import Links from './Links/Links';
import Logo from './Logo/Logo';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={classes.Wrapper}>
      <Logo />
      <Links />
    </div>
  );
};

export default Navbar;
