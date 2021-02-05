export interface IPaginationState<T> {
  entriesOnSelectedPage: T[];
  elementsOnPage: number;
  actualPageIdx: number;
  lastPageIdx: number;
  isBusy: boolean;
  pagesNumbers: number[];
}

export enum ActionTypes {
  UPDATE_DATA_ENTIRES_ON_PAGE = 'UPDATE_DATA_ENTIRES_ON_PAGE',
  UPDATE_ACTUAL_PAGE_INDEX = 'UPDATE_ACTUAL_PAGE_INDEX',
  SET_TO_LOADING = 'SET_TO_LOADING',
  SET_TO_LOADING_DONE = 'SET_TO_LOADING_DONE',
}

export type availableIndexUpdates =
  | 'next'
  | 'prev'
  | 'first'
  | 'last'
  | 'number';

export type Actions<T> =
  | {
      type: 'UPDATE_DATA_ENTIRES_ON_PAGE';
      payload: {
        dataEntries: T[];
        elementsOnPage: number;
      };
    }
  | {
      type: 'UPDATE_ACTUAL_PAGE_INDEX';
      payload: {
        updateType: availableIndexUpdates;
        pageNumber?: number;
      };
    }
  | { type: 'SET_TO_LOADING' }
  | { type: 'SET_TO_LOADING_DONE' };

// export interface GenericPayload {
//   [key: string]: any;
// }
// export interface GenericAction {
//   type: string;
//   payload?: GenericPayload;
// }
