import { Link } from 'react-router-dom';
import classes from './SingleLink.module.scss';

interface IProps {
  path: string;
  value: string;
}

const SingleLink: React.FC<IProps> = ({ path, value }) => {
  return (
    <li className={classes.ListItem}>
      <Link to={path} className={classes.Link}>
        {value}
      </Link>
    </li>
  );
};

export default SingleLink;
