export const throttle = (fn: any, wait: number) => {
  let timerId: any;
  let inThrottle: boolean;
  let lastTime: number;

  return (...args: any) => {
    if (!inThrottle) {
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn(...args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

export const debounce = (fn: any, wait: number) => {
  let timerId: any;

  return (...args: any) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => fn(...args), wait);
  };
};
