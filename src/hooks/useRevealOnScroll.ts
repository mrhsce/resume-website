import {RefObject, useEffect, useRef, useState} from 'react';

interface RevealOptions {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
}

const useRevealOnScroll = <T extends HTMLElement>(options: RevealOptions = {}): [RefObject<T>, boolean] => {
  const {rootMargin = '0px 0px -10% 0px', threshold = 0.1, once = true} = options;
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {root: null, rootMargin, threshold},
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  return [elementRef, isVisible];
};

export default useRevealOnScroll;

