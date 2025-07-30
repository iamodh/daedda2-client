import React, { useEffect } from 'react';

const useModalDismiss = (
  targetRef: React.RefObject<HTMLDivElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    // targetRef가 클릭된 노드를 포함하지 않으면 handler를 실행하는 함수
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        targetRef.current &&
        !targetRef.current.contains(event.target as Node)
      ) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
};

export default useModalDismiss;
