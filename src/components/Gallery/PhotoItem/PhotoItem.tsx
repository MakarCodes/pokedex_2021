import classes from '../Gallery.module.scss';

interface IProps {
  gridClass: string;
  img: string;
}

const PhotoItem: React.FC<IProps> = ({ img, gridClass }) => {
  return (
    <div className={`${classes.Center} ${gridClass}`}>
      <img className={classes.ResponsiveImage} src={img} alt='random pokemon' />
    </div>
  );
};

export default PhotoItem;
