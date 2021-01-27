import { useContext } from 'react';
import { viewportSizeContext } from '../contexts/ViewportSizeContextProvider';

const useViewportSize = () => {
  //Currently, every component that uses this Hook will use only once created event listener for the window resize event.
  const { width, height } = useContext(viewportSizeContext);
  return { width, height };
};

export default useViewportSize;
