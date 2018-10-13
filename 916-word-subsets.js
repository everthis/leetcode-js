/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
const wordSubsets = function(A, B) {
  function counter(s) {
    let count = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) count[s.charCodeAt(i) - 97]++;
    return count;
  }
  let aux = Array(26).fill(0);
  let result = [];
  for (let i = 0; i < B.length; i++) {
    let count = counter(B[i]);
    for (let i = 0; i < 26; i++) {
      aux[i] = Math.max(aux[i], count[i]);
    }
  }
  for (let i = 0; i < A.length; i++) {
    let count = counter(A[i]);
    let flag = true;
    for (let j = 0; j < 26; j++) {
      if (aux[j] > 0 && count[j] - aux[j] < 0) {
        flag = false;
        break;
      }
    }
    if (flag) result.push(A[i]);
  }
  return result;
};
