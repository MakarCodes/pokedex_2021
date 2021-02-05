import React from 'react';
import styles from './PaginationBtn.module.scss';

interface IProps {
  number: number;
  actualPageIdx: number;
  goToPage: (pageNumber: number) => void;
}

const PaginationBtn: React.FC<IProps> = ({
  number,
  actualPageIdx,
  goToPage,
}) => {
  return (
    <button
      key={number}
      onClick={() => goToPage(number)}
      className={`${styles.PaginationBtn} ${
        actualPageIdx === number ? styles.PaginationBtnActive : ''
      }`}
    >
      {number}
    </button>
  );
};

export default PaginationBtn;
