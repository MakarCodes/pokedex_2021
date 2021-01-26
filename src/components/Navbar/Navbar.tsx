import Hamburger from './Hamburger/Hamburger';
import { useState } from 'react';

import Links from './Links/Links';
import Logo from './Logo/Logo';

import classes from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={classes.Wrapper}>
      <Logo />
      <Links />
      <Hamburger isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default Navbar;
