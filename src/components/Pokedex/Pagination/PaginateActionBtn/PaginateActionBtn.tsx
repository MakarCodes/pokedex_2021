import styles from '../PaginationBtn/PaginationBtn.module.scss';

interface IProps {
  actionName?: string;
  children?: React.ReactNode;
  actionFn: () => void;
  testID: string;
}

const PaginateActionBtn: React.FC<IProps> = ({
  actionName,
  children,
  testID,
  actionFn,
}) => (
  <button
    onClick={() => actionFn()}
    className={styles.PaginationBtn}
    data-testid={testID}
  >
    {actionName}
    {children}
  </button>
);

export default PaginateActionBtn;
