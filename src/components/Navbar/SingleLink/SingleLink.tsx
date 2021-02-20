import { Link } from 'react-router-dom';
import classes from './SingleLink.module.scss';

interface IProps {
  path: string;
  value: string;
  toggle: () => void;
}

const SingleLink: React.FC<IProps> = ({ path, value, toggle }) => {
  return (
    <li className={classes.ListItem}>
      <Link to={path} className={classes.Link} onClick={() => toggle()}>
        {value}
      </Link>
    </li>
  );
};

export default SingleLink;
