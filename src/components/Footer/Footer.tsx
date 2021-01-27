import { useLayoutEffect, useRef } from 'react';

import classes from './Footer.module.scss';

interface IProps {
  setFooterHeight: React.Dispatch<React.SetStateAction<number>>;
}
const Footer: React.FC<IProps> = ({ setFooterHeight }) => {
  const targetRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
  useLayoutEffect(() => {
    if (targetRef.current) {
      setFooterHeight(targetRef.current.offsetHeight);
    }
  }, []);
  return (
    <div ref={targetRef}>
      <div className={classes.FooterContainer}>
        <div className={classes.FooterWrapper}>
          <div className={classes.CopyrightsContainer}>Copyright © 2021</div>
          <div className={classes.LinksContainer}>
            <a href='/' className={classes.Link}>
              Polityka prywatności
            </a>
            <a href='/' className={classes.Link}>
              Mapa strony
            </a>
            <a href='/' className={classes.Link}>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
