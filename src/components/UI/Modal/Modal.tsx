import React, { useState } from 'react';

const useModalLogic = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return { isVisible, toggleVisibility };
};

const Modal = () => {
  return <div></div>;
};

export default Modal;
