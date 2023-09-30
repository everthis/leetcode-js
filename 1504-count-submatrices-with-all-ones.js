/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSubmat = function(mat) {
  let m = mat.length
  let n = mat[0].length
  let res = 0
  let height = Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    let st = []
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 1) {
        height[j]++
      } else {
        height[j] = 0
      }
      let sum = 0
      while (st.length != 0) {
        if (height[st[st.length - 1][0]] < height[j]) break
        st.pop()
      }
      if (st.length != 0) {
        sum += height[j] * (j - st[st.length - 1][0]) + st[st.length - 1][1]
      } else {
        sum += height[j] * (j + 1)
      }
      st.push([j, sum])
      res += sum
    }
  }
  return res

};
