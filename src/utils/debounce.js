export const debounce = (fn, ms) => {
  let timeout;

  return function () {
    const fnCall = () => {
      fn.apply(null);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};
