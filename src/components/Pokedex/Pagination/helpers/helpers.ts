interface IObject {
  [key: string]: any;
}

export const updateObject = <T>(oldObject: T, updatedProperties: IObject) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const generatePagesNumbers = (lastAvailableIdx: number) => {
  const pagesNumbers: number[] = [];
  for (let i = 1; i <= lastAvailableIdx; i++) {
    pagesNumbers.push(i);
  }
  return pagesNumbers;
};

export const getEntriesOnSelectedPage = <T>(
  actualPageIdx: number,
  elementsOnPage: number,
  lastPageIdx: number,
  dataEntries: T[]
) => {
  const firstElementIdxOnActualPage: number =
    (actualPageIdx - 1) * elementsOnPage;
  const lastElementIdxOnActualPage: number =
    actualPageIdx === lastPageIdx
      ? dataEntries.length
      : firstElementIdxOnActualPage + elementsOnPage;
  return dataEntries.slice(
    firstElementIdxOnActualPage,
    lastElementIdxOnActualPage
  );
};
