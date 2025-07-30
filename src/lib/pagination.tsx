import { useEffect, useState } from 'react';

interface useIntersectionObserverProps {
  root?: null; // 무엇을 기준으로 target이 보이는지 설명, null은 viewport 기준
  rootMargin?: string; // root 기준에 margin을 줘서 감지 범위를 조절
  threshold?: number; // target이 어느 정도 보여야 감지할 것인가 조절 (0 ~ 1)
  onIntersect: IntersectionObserverCallback; // target이 감지되면 실행한 callback 함수
}
export const useIntersectionObserver = ({
  root,
  rootMargin,
  threshold,
  onIntersect,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
};
