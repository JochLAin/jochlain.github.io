import {SyntheticEvent, useEffect, useRef} from "react";
import useDebounce from "@assets/hooks/useDebounce";

export function useScrollListener(onScrollStart?: Function, onScrollEnd?: Function, onScroll?: Function) {
  const scrolling = useRef<boolean>(false);
  const scrollValue = useRef<number>(0);
  const debounce = useDebounce();

  return (evt: SyntheticEvent<HTMLDivElement>) => {
    const { currentTarget: target } = evt;
    const value = target.scrollTop;
    const direction = value > scrollValue.current;
    scrollValue.current = value;

    if (!scrolling.current) {
      scrolling.current = true;
      onScrollStart ? onScrollStart(target, direction) : null;
    }
    onScroll ? onScroll(target, direction) : null;
    debounce(() => {
      scrolling.current = false;
      onScrollEnd ? onScrollEnd(target, direction) : null;
    }, 50);
  };
}

export function usePreventScroll(querySelector: string) {
  useEffect(() => {
    console.log(document.querySelectorAll(querySelector));
    const wheelEventName = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    const prevent = (evt: Event) => { evt.preventDefault(); };
    const preventKeyboard = (evt: KeyboardEvent) => {
      console.log(evt.key);
      if ([].includes(evt.key)) {
        evt.preventDefault();
      }
    };

    document.querySelectorAll(querySelector).forEach((elem) => {
      elem.addEventListener('DOMMouseWheel', prevent, false);
      elem.addEventListener(wheelEventName, prevent, { passive: false });
      elem.addEventListener('touchmove', prevent, { passive: false });
      elem.addEventListener('keydown', preventKeyboard, false);
    });

    return () => {
      document.querySelectorAll(querySelector).forEach((elem) => {
        elem.removeEventListener('DOMMouseWheel', prevent);
        elem.removeEventListener(wheelEventName, prevent);
        elem.removeEventListener('touchmove', prevent);
        elem.removeEventListener('keydown', preventKeyboard);
      });
    };
  }, [querySelector]);
}
