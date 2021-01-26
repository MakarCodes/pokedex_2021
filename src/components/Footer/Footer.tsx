import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div>
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
