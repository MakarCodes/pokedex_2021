import { render, fireEvent, screen } from '@testing-library/react';
import PaginationPanel from '../PaginationPanel/PaginationPanel';

const randomFn = jest.fn();

const paginationState = {
  actualPageIdx: 1,
  lastPageIdx: 11,
  pagesNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

const paginationActions = {
  goToFirstPage: randomFn,
  goToPreviousPage: randomFn,
  goToNextPage: randomFn,
  goToLastPage: randomFn,
  goToPage: randomFn,
};

describe('Pagination component works correctly', () => {
  it('if component renders all buttons', () => {
    render(
      <PaginationPanel
        paginationActions={paginationActions}
        paginationState={paginationState}
      />
    );
    const firstPageBtn = screen.getByTestId('firstPage');
    fireEvent.click(firstPageBtn);
    expect(firstPageBtn).toBeInTheDocument();
    expect(paginationActions.goToFirstPage).toHaveBeenCalledTimes(1);

    const lastPageBtn = screen.getByTestId('lastPage');
    fireEvent.click(lastPageBtn);
    expect(lastPageBtn).toBeInTheDocument();
    expect(paginationActions.goToLastPage).toHaveBeenCalledTimes(2);

    const prevPageBtn = screen.getByTestId('goToPrevPage');
    fireEvent.click(prevPageBtn);
    expect(prevPageBtn).toBeInTheDocument();
    expect(paginationActions.goToPreviousPage).toHaveBeenCalledTimes(3);

    const nextPageBtn = screen.getByTestId('goToPrevPage');
    fireEvent.click(nextPageBtn);
    expect(nextPageBtn).toBeInTheDocument();
    expect(paginationActions.goToNextPage).toHaveBeenCalledTimes(4);
  });
});

// need to find solution to distingiush button components, as currently it counts events like it would be same button, even it isnt
//https://dev.to/d_ir/testing-multiple-instances-of-the-same-mocked-component-c16
