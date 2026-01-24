import { useCallback, useEffect, useRef } from 'react';

interface useIntersectionOptions extends IntersectionObserverInit {
  callback: IntersectionObserverCallback;
}

export default function useIntersection({
  threshold = 0.2,
  rootMargin = '0px 0px 50% 0px',
  root = null,
  callback,
}: useIntersectionOptions) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback; // setTarget의 useCallback에서 callback 의존성을 분리
  }, [callback]);

  // observer 옵션이 변경되거나 훅이 언마운트되면 기존 observer를 제거한다.
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [root, rootMargin, threshold]);

  const setTarget = useCallback(
    (node: HTMLElement | null) => {
      if (observerRef.current === null) {
        observerRef.current = new IntersectionObserver(
          (entries, observer) => {
            callbackRef.current(entries, observer); // wrapper로 최신화된 callback 사용
          },
          { threshold, root, rootMargin }
        );
      }

      if (node) {
        observerRef.current.observe(node);
      }
    },
    [threshold, rootMargin, root]
  );

  return { setTarget };
}
