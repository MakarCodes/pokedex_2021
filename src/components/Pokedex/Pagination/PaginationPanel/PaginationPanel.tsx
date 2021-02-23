import React, { useMemo } from 'react';
import styles from './PaginationPanel.module.scss';
import { IPaginationActions } from '../paginationTypes';
import { generatePagsToRender } from './generatePagesToRender';
import PaginateActionBtn from '../PaginateActionBtn/PaginateActionBtn';
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
        <PaginateActionBtn
          actionName='FIRST PAGE'
          actionFn={goToFirstPage}
          testID='firstPage'
        />
        <PaginateActionBtn actionFn={goToPreviousPage} testID='goToPrevPage'>
          <span className={`${styles.Chevron} ${styles.ChevronLeft}`}></span>
        </PaginateActionBtn>
        <div dat-testid='goToPageButtons' style={{ display: 'flex' }}>
          {pagesToRender}
        </div>
        <PaginateActionBtn actionFn={goToNextPage} testID='goToNextPage'>
          <span className={`${styles.Chevron} ${styles.ChevronRight}`}></span>
        </PaginateActionBtn>
        <PaginateActionBtn
          actionName='LAST PAGE'
          actionFn={goToLastPage}
          testID='lastPage'
        />
      </div>
    </div>
  );
};

export default PaginationPanel;
