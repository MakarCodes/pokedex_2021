import p1 from '../../../assets/images/pokemon_1.jpg';
import p2 from '../../../assets/images/pokemon_2.jpg';
import p3 from '../../../assets/images/pokemon_3.jpg';
import p4 from '../../../assets/images/pokemon_4.jpg';
import p5 from '../../../assets/images/pokemon_5.jpg';
import p6 from '../../../assets/images/pokemon_6.jpg';
import p7 from '../../../assets/images/pokemon_7.jpg';
import p8 from '../../../assets/images/pokemon_8.jpg';
import p9 from '../../../assets/images/pokemon_9.jpg';
import p10 from '../../../assets/images/pokemon_10.jpg';
import classes from './Gallery.module.scss';
import PhotoItem from './PhotoItem/PhotoItem';

const Gallery = () => {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.GridContainer}>
        <PhotoItem img={p1} gridClass={classes.p1} />
        <PhotoItem img={p2} gridClass={classes.p2} />
        <PhotoItem img={p3} gridClass={classes.p3} />
        <PhotoItem img={p4} gridClass={classes.p4} />
        <PhotoItem img={p5} gridClass={classes.p5} />
        <PhotoItem img={p6} gridClass={classes.p6} />
        <PhotoItem img={p7} gridClass={classes.p7} />
        <PhotoItem img={p8} gridClass={classes.p8} />
        <PhotoItem img={p9} gridClass={classes.p9} />
        <PhotoItem img={p10} gridClass={classes.p10} />
        <PhotoItem img={p1} gridClass={classes.p11} />
      </div>
    </div>
  );
};

export default Gallery;
