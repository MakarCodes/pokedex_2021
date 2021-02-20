import Hamburger from './Hamburger/Hamburger';
import { useLayoutEffect, useState, useRef } from 'react';

import Links from './Links/Links';
import Logo from './Logo/Logo';

import classes from './Navbar.module.scss';

interface IProps {
  setNavbarHeight: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar: React.FC<IProps> = ({ setNavbarHeight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const targetRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
  useLayoutEffect(() => {
    if (targetRef.current) {
      setNavbarHeight(targetRef.current.offsetHeight);
    }
  }, [setNavbarHeight]);

  return (
    <div className={classes.Wrapper} ref={targetRef}>
      <Logo />
      <Links isOpen={isOpen} toggle={toggle} />
      <Hamburger isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default Navbar;
