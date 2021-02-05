export interface IPaginationStateValues<T> {
  actualPageIdx: number;
  lastPageIdx: number;
  entriesOnSelectedPage: T[];
  isBusy: boolean;
  pagesNumbers: number[];
}
export interface IPaginationActions {
  goToFirstPage: () => void;
  goToLastPage: () => void;
  goToPage: (pageNumber: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

export type paginationTuple<T> = [
  IPaginationStateValues<T>,
  IPaginationActions
];
