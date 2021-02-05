import { ActionTypes, Actions } from '../reducer/reducerTypes';

const actionsFactory = <T>(dispatch: React.Dispatch<Actions<T>>) => ({
  updateDataEntries: (dataEntries: T[], elementsOnPage: number) =>
    dispatch({
      type: 'UPDATE_DATA_ENTIRES_ON_PAGE',
      payload: {
        dataEntries,
        elementsOnPage,
      },
    }),
  setToIsLoading: () => dispatch({ type: ActionTypes.SET_TO_LOADING }),
  setToLoadingDone: () => dispatch({ type: ActionTypes.SET_TO_LOADING_DONE }),
  goToFirstPage: () =>
    dispatch({
      type: ActionTypes.UPDATE_ACTUAL_PAGE_INDEX,
      payload: {
        updateType: 'first',
      },
    }),
  goToLastPage: () =>
    dispatch({
      type: ActionTypes.UPDATE_ACTUAL_PAGE_INDEX,
      payload: {
        updateType: 'last',
      },
    }),
  goToPage: (pageNumber: number) =>
    dispatch({
      type: ActionTypes.UPDATE_ACTUAL_PAGE_INDEX,
      payload: {
        updateType: 'number',
        pageNumber,
      },
    }),
  goToNextPage: () =>
    dispatch({
      type: ActionTypes.UPDATE_ACTUAL_PAGE_INDEX,
      payload: {
        updateType: 'next',
      },
    }),
  goToPreviousPage: () =>
    dispatch({
      type: ActionTypes.UPDATE_ACTUAL_PAGE_INDEX,
      payload: {
        updateType: 'prev',
      },
    }),
});

export default actionsFactory;
