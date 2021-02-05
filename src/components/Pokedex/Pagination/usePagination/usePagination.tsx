import { useEffect, useReducer } from 'react';
import {
  IPaginationStateValues,
  IPaginationActions,
  paginationTuple,
} from '../paginationTypes';
import { initialState, paginationReducer } from '../reducer/paginationReducer';
import actionsFactory from './actionsFactory';
import { IPaginationState, Actions } from '../reducer/reducerTypes';
import React from 'react';

const usePagination = <T,>(dataEntries: T[], elementsOnPage: number = 20) => {
  const [paginationState, dispatch] = useReducer<
    React.Reducer<IPaginationState<T>, Actions<T>>
  >(paginationReducer, initialState);
  const actions = actionsFactory(dispatch);
  const {
    actualPageIdx,
    lastPageIdx,
    entriesOnSelectedPage,
    pagesNumbers,
    isBusy,
  } = paginationState;

  useEffect(() => {
    actions.updateDataEntries(dataEntries, elementsOnPage);
  }, [dataEntries, elementsOnPage, actualPageIdx]);

  useEffect(() => {
    actions.setToIsLoading();
    let timer = setTimeout(() => actions.setToLoadingDone(), 333);
    return () => {
      clearTimeout(timer);
    };
  }, [actualPageIdx]);

  const paginationStateValues: IPaginationStateValues<T> = {
    actualPageIdx,
    lastPageIdx,
    entriesOnSelectedPage,
    isBusy,
    pagesNumbers,
  };

  const paginationActions: IPaginationActions = {
    goToFirstPage: actions.goToFirstPage,
    goToPreviousPage: actions.goToPreviousPage,
    goToPage: actions.goToPage,
    goToNextPage: actions.goToNextPage,
    goToLastPage: actions.goToLastPage,
  };

  return [paginationStateValues, paginationActions] as paginationTuple<T>;
};

export default usePagination;
