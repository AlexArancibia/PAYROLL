import { useEffect } from "react";

const useBodyScrollLock = (): [() => void, () => void] => {
  const bodyStyle = document.body.style;

  const lockScroll = () => {
    bodyStyle.overflowY = 'hidden';
  };

  const unlockScroll = () => {
    bodyStyle.overflowY = 'auto';
  };

  useEffect(() => {
    return () => {
      // Ensure the scroll is unlocked when the component using this hook unmounts
      unlockScroll();
    };
  }, []);

  return [lockScroll, unlockScroll];
};

export default useBodyScrollLock;
