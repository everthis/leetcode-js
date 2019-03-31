/**
 * @param {number[]} A
 * @return {boolean[]}
 */
const prefixesDivBy5 = function(A) {
    const res = []
    let pre = 0
    const len = A.length
    for(let i = 0; i < len; i++) {
      pre = (pre % 100) * 2 + A[i]
      res.push(pre % 5 === 0 ? true : false)
    }
    return res
};
