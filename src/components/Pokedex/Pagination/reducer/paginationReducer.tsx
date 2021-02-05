import { IPaginationState, ActionTypes, Actions } from './reducerTypes';
import {
  generatePagesNumbers,
  getEntriesOnSelectedPage,
} from '../helpers/helpers';

const FIRST_PAGE_IDX: number = 1;

interface IInitialState {
  entriesOnSelectedPage: Array<any>;
  elementsOnPage: number;
  actualPageIdx: number;
  lastPageIdx: number;
  isBusy: boolean;
  pagesNumbers: number[];
}
// export const initialState: IPaginationState<IUser>
export const initialState: IInitialState = {
  entriesOnSelectedPage: [],
  elementsOnPage: 20,
  actualPageIdx: FIRST_PAGE_IDX,
  lastPageIdx: FIRST_PAGE_IDX,
  pagesNumbers: [],
  isBusy: false,
};

// export const paginationReducer = (
//   state: IPaginationState<IUser>,
//   action: Actions<IUser>
// React.Reducer<State, Action>

export const paginationReducer = <T,>(
  state: IPaginationState<T>,
  action: Actions<T>
) => {
  // const reducer: React.Reducer<IPaginationState<T>, Actions<T>> = (
  //   state,
  //   action
  // ) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA_ENTIRES_ON_PAGE:
      return updateDataEntriesOnPage(state, action);
    case ActionTypes.UPDATE_ACTUAL_PAGE_INDEX:
      return updateActualPageIndex(state, action);
    case ActionTypes.SET_TO_LOADING:
      return setToLoading(state, action);
    case ActionTypes.SET_TO_LOADING_DONE:
      return setToLoadingDone(state, action);
    default:
      return state;
  }
  // };

  // return reducer(_state, _action);
};

const setToLoading = <T,>(state: IPaginationState<T>, action: Actions<T>) => ({
  ...state,
  isBusy: true,
});
const setToLoadingDone = <T,>(
  state: IPaginationState<T>,
  action: Actions<T>
) => ({
  ...state,
  isBusy: false,
});

const updateDataEntriesOnPage = <T,>(
  state: IPaginationState<T>,
  action: Actions<T>
) => {
  if (action.type === 'UPDATE_DATA_ENTIRES_ON_PAGE') {
    const { actualPageIdx } = state;
    const { elementsOnPage, dataEntries } = action.payload;
    const lastPageIdx: number = Math.ceil(dataEntries.length / elementsOnPage);
    const pagesNumbers: number[] = generatePagesNumbers(lastPageIdx);
    const entriesOnSelectedPage = getEntriesOnSelectedPage(
      actualPageIdx,
      elementsOnPage,
      lastPageIdx,
      dataEntries
    );
    return {
      ...state,
      entriesOnSelectedPage,
      elementsOnPage,
      lastPageIdx,
      pagesNumbers,
    };
  }
  return state;
};

const updateActualPageIndex = <T,>(
  state: IPaginationState<T>,
  action: Actions<T>
) => {
  if (action.type === 'UPDATE_ACTUAL_PAGE_INDEX') {
    switch (action.payload.updateType) {
      case 'first':
        return { ...state, actualPageIdx: FIRST_PAGE_IDX };
      case 'last':
        return { ...state, actualPageIdx: state.lastPageIdx };
      case 'number':
        if (action.payload.pageNumber) {
          return { ...state, actualPageIdx: action.payload.pageNumber };
        } else {
          return state;
        }
      case 'next':
        const actualPageIdx: number =
          state.actualPageIdx === state.lastPageIdx
            ? state.lastPageIdx
            : state.actualPageIdx + 1;
        return { ...state, actualPageIdx };
      case 'prev':
        const actualPageIdxPrev: number =
          state.actualPageIdx === FIRST_PAGE_IDX
            ? state.actualPageIdx
            : state.actualPageIdx - 1;
        return { ...state, actualPageIdx: actualPageIdxPrev };
      default:
        return state;
    }
  }
  return state;
};
