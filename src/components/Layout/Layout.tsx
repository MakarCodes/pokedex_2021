import { useEffect, useState } from 'react';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import classes from './Layout.module.scss';

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [childrenHeight, setChildrenHeight] = useState(0);
  useEffect(() => {
    setChildrenHeight(window.innerHeight - navbarHeight - footerHeight);
  }, [navbarHeight, footerHeight]);
  return (
    <div className={classes.Wrapper}>
      <Navbar setNavbarHeight={setNavbarHeight} />
      <div
        style={{ minHeight: `${childrenHeight}` + 'px' }}
        className={classes.InnerWrapper}
      >
        {children}
      </div>
      <Footer setFooterHeight={setFooterHeight} />
    </div>
  );
};

export default Layout;
