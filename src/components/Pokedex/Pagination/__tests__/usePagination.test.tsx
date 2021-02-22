import { renderHook, act } from '@testing-library/react-hooks';
import usePagination from '../usePagination/usePagination';

describe('usePagination hook works correctly', () => {
  const mockedPokemons = [
    { id: 1, name: 'First pokemon name', body: 'First pokemon body' },
    { id: 2, name: 'Second pokemon name', body: 'Second pokemon body' },
    { id: 3, name: 'Third pokemon name', body: 'Third pokemon body' },
    { id: 4, name: 'Fourth pokemon name', body: 'Fourth pokemon body' },
    { id: 5, name: 'Fifth pokemon name', body: 'Fifth pokemon body' },
  ];
  it('if function for selecting different pages goToPage works as expected', () => {
    const { result } = renderHook(() => usePagination(mockedPokemons));
    const pageNumber: number = 3;
    act(() => {
      result.current[1].goToPage(pageNumber);
    });
    expect(result.current[0].actualPageIdx).toBe(pageNumber);
  });
  it('if function for selecting first page goToFirstPage works as expected', () => {
    const { result } = renderHook(() => usePagination(mockedPokemons));
    act(() => {
      result.current[1].goToFirstPage();
    });
    expect(result.current[0].actualPageIdx).toBe(1);
  });
  it('if function for selecting last page goToLastPage works as expected', () => {
    const { result } = renderHook(() => usePagination(mockedPokemons));
    act(() => {
      result.current[1].goToLastPage();
    });
    expect(result.current[0].actualPageIdx).toBe(result.current[0].lastPageIdx);
  });
  it('if function for selecting next page goToNextPage works as expected', () => {
    const { result } = renderHook(() => usePagination(mockedPokemons));
    act(() => {
      result.current[1].goToPage(2);
      result.current[1].goToNextPage();
    });
    expect(result.current[0].actualPageIdx).toBe(3);
  });
  it('if function for selecting previous page goToPreviousPage works as expected', () => {
    const { result } = renderHook(() => usePagination(mockedPokemons));
    act(() => {
      result.current[1].goToPage(2);
      result.current[1].goToPreviousPage();
    });
    expect(result.current[0].actualPageIdx).toBe(1);
  });

  it('if function entriesOnSelectedPage works as expected', () => {
    const elementsPerPage = 2;
    const { result } = renderHook(() =>
      usePagination(mockedPokemons, elementsPerPage)
    );
    act(() => {
      result.current[1].goToLastPage();
    });
    expect(result.current[0].actualPageIdx).toBe(3);
    expect(result.current[0].entriesOnSelectedPage.length).toBe(1);
  });

  it('if isBusy is true while function is on going', () => {
    const { result } = renderHook(() => usePagination(mockedPokemons));
    act(() => {
      result.current[1].goToPage(2);
    });
    expect(result.current[0].isBusy).toBe(true);
  });

  it('if isBusy is false when function is done', () => {
    const { result } = renderHook(() => usePagination(mockedPokemons));
    act(() => {
      result.current[1].goToPage(2);
    });
    setTimeout(() => expect(result.current[0].isBusy).toBe(false), 333);
  });
});
