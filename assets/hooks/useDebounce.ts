import { useMemo } from "react";

export default () => {
  return useMemo(() => {
    let debounce_timeout: number|undefined;
    return (callback: Function, delay: number = 150) => {
      if (debounce_timeout) window.clearTimeout(debounce_timeout);
      debounce_timeout = window.setTimeout(() => {
        debounce_timeout = undefined;
        callback();
      }, delay);
    };
  }, []);
}
