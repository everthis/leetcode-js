/**
 * @param {string} s
 * @return {boolean}
 */
const checkString = function(s) {
  const la = s.lastIndexOf('a')
  const fb = s.indexOf('b')
  return fb === -1 ? true : la < fb
};
