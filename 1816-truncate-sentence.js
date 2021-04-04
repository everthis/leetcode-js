/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function(s, k) {
  const arr = s.split(' ')
  const sli = arr.slice(0, k)
  return sli.join(' ')
};
