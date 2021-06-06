/**
 * @param {string} s
 * @return {number}
 */
const minFlips = function (s) {
  let n = s.length
  let t = s + s
  let a0 = 0
  let a1 = 0
  let b0 = 0
  let b1 = 0
  let ans = Infinity
  for (let i = 0; i < t.length; i++) {
      if (t[i] == '0') {
          if (i % 2 == 0) {
              a0++
          } else {
              b0++
          }
      } else {
          if (i % 2 == 0) {
              a1++
          } else {
              b1++
          }
      }

      if (i >= n) {
          if (t[i - n] == '0') {
              if ((i - n) % 2 == 0) {
                  a0--
              } else {
                  b0--
              }
          } else {
              if ((i - n) % 2 == 0) {
                  a1--
              } else {
                  b1--
              }
          }
      }
      ans = Math.min(ans, Math.min(n - a0 - b1, n - a1 - b0))
  }

  return ans
}

