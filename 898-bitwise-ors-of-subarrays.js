/**
 * @param {number[]} A
 * @return {number}
 */
const subarrayBitwiseORs = function(A) {
    let cur = new Set()
    const ans = new Set()
  
    for (let i = 0; i < A.length; i++) {
      const item = A[i]
      const x = new Set()
      for (let e of cur.values()) {
        x.add(e | item)
      }
      x.add(item)
      cur = x
      for (let sub of cur.values()) {
        ans.add(sub)
      }
    }
    return ans.size
};
