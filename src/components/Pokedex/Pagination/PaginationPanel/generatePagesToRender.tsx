import React from 'react';
import PaginationBtn from '../PaginationBtn/PaginationBtn';
import Dots from '../Dots/Dots';

const LAST_NUMBER_AT_START = 5;
const MAX_NUMBER_WITHOUT_SHRINK = 10;
const VALUE_END = LAST_NUMBER_AT_START - 1;

export const generatePagsToRender = (
  pagesNumbers: number[],
  actualPageIdx: number,
  lastPageIdx: number,
  goToPage: (pageNumber: number) => void
) => {
  if (pagesNumbers.length <= MAX_NUMBER_WITHOUT_SHRINK) {
    return pagesNumbers.map(number => (
      <PaginationBtn
        number={number}
        actualPageIdx={actualPageIdx}
        goToPage={goToPage}
        key={number}
      />
    ));
  }
  if (
    pagesNumbers.length > MAX_NUMBER_WITHOUT_SHRINK &&
    actualPageIdx < LAST_NUMBER_AT_START
  ) {
    return (
      <>
        {[...Array(LAST_NUMBER_AT_START)].map((_, idx) => {
          const number = idx + 1;
          return (
            <PaginationBtn
              number={number}
              actualPageIdx={actualPageIdx}
              goToPage={goToPage}
              key={idx}
            />
          );
        })}
        <Dots />
        <PaginationBtn
          number={lastPageIdx}
          actualPageIdx={actualPageIdx}
          goToPage={goToPage}
        />
      </>
    );
  }
  if (
    pagesNumbers.length > MAX_NUMBER_WITHOUT_SHRINK &&
    actualPageIdx > lastPageIdx - VALUE_END
  ) {
    return (
      <>
        <PaginationBtn
          number={1}
          actualPageIdx={actualPageIdx}
          goToPage={goToPage}
        />
        <Dots />
        {[...Array(5)].map((_, idx) => {
          const number = lastPageIdx - VALUE_END + idx;
          return (
            <PaginationBtn
              number={number}
              actualPageIdx={actualPageIdx}
              goToPage={goToPage}
              key={idx}
            />
          );
        })}
      </>
    );
  }
  if (
    (pagesNumbers.length > MAX_NUMBER_WITHOUT_SHRINK &&
      actualPageIdx <= lastPageIdx - VALUE_END) ||
    actualPageIdx >= LAST_NUMBER_AT_START
  ) {
    return (
      <>
        <PaginationBtn
          number={1}
          actualPageIdx={actualPageIdx}
          goToPage={goToPage}
        />
        <Dots />
        <PaginationBtn
          number={actualPageIdx - 1}
          actualPageIdx={actualPageIdx}
          goToPage={goToPage}
        />

        <PaginationBtn
          number={actualPageIdx}
          actualPageIdx={actualPageIdx}
          goToPage={goToPage}
        />
        <PaginationBtn
          number={actualPageIdx + 1}
          actualPageIdx={actualPageIdx}
          goToPage={goToPage}
        />
        <Dots />
        <PaginationBtn
          number={lastPageIdx}
          actualPageIdx={actualPageIdx}
          goToPage={goToPage}
        />
      </>
    );
  }
  return null;
};
