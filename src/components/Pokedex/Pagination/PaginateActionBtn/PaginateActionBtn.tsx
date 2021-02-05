import styles from '../PaginationBtn/PaginationBtn.module.scss';

interface IProps {
  actionName?: string;
  children?: React.ReactNode;
  actionFn: () => void;
}

const PaginateActionBtn: React.FC<IProps> = ({
  actionName,
  children,
  actionFn,
}) => (
  <button onClick={() => actionFn()} className={styles.PaginationBtn}>
    {actionName}
    {children}
  </button>
);

export default PaginateActionBtn;
