import React, { createContext, ReactNode, useState, useEffect } from 'react';

interface IVieportSizeContexProps {
  width: number;
  height: number;
}

export const viewportSizeContext = createContext({
  width: window.innerWidth,
  height: window.innerHeight,
} as IVieportSizeContexProps);

// const getWidth = () => window.innerWidth
//   || document.documentElement.clientWidth
//   || document.body.clientWidth;

const ViewportSizeContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleWindowResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('onorientationchange', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('onorientationchange', handleWindowResize);
    };
  }, []);

  return (
    <viewportSizeContext.Provider value={windowSize}>
      {children}
    </viewportSizeContext.Provider>
  );
};

export default ViewportSizeContextProvider;
