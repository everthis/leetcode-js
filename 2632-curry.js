/**
 * @param {Function} fn
 * @return {Function}
 */
const curry = function(fn) {
  return function curried(...args) {
    if(args.length >= fn.length) return fn(...args)
    return (...params) => curried(...args, ...params)
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
