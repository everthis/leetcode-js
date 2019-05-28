/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = function(A) {
  const res = []
  const odd = []
  const even = []
  for(let i = 0, len = A.length; i < len; i++) {
    if(A[i] % 2 === 0) even.push(A[i])
    else odd.push(A[i])
  }
  for(let i = 0, len = odd.length; i < len; i++) {
    res.push(even[i], odd[i])
  }
  return res
};
