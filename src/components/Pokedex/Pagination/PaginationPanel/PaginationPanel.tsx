import React, { useMemo } from 'react';
import styles from './PaginationPanel.module.scss';
import { IPaginationActions } from '../paginationTypes';
import { generatePagsToRender } from './generatePagesToRender';
interface IProps {
  paginationState: {
    lastPageIdx: number;
    actualPageIdx: number;
    pagesNumbers: number[];
  };
  paginationActions: IPaginationActions;
}

const PaginationPanel: React.FC<IProps> = ({
  paginationState,
  paginationActions,
}) => {
  const { actualPageIdx, pagesNumbers, lastPageIdx } = paginationState;
  const {
    goToPage,
    goToFirstPage,
    goToPreviousPage,
    goToNextPage,
    goToLastPage,
  } = paginationActions;

  const pagesToRender = useMemo(
    () =>
      generatePagsToRender(pagesNumbers, actualPageIdx, lastPageIdx, goToPage),
    [pagesNumbers, actualPageIdx, lastPageIdx, goToPage]
  );
  return (
    <div className={styles.PaginationWrapper}>
      <div className={styles.ButtonsContainer}>
        <button
          onClick={() => goToFirstPage()}
          className={styles.PaginationBtn}
        >
          FIRST PAGE
        </button>
        <button
          onClick={() => goToPreviousPage()}
          data-testid='goToPrevPage'
          className={styles.PaginationBtn}
        >
          <span className={`${styles.Chevron} ${styles.ChevronLeft}`}></span>
        </button>
        <div data-testid='goToPageButtons' style={{ display: 'flex' }}>
          {pagesToRender}
        </div>
        <button
          onClick={() => goToNextPage()}
          data-testid='goToNextPage'
          className={styles.PaginationBtn}
        >
          <span className={`${styles.Chevron} ${styles.ChevronRight}`}></span>
        </button>
        <button onClick={() => goToLastPage()} className={styles.PaginationBtn}>
          LAST PAGE
        </button>
      </div>
    </div>
  );
};

export default PaginationPanel;
