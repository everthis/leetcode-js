/**
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function(arr) {
function* gen(s) {
  const s_len = s.length
  for (let i = 0; i < s_len; i++) {
    for (let j = i; j < s_len; j++) {
      yield s.slice(i, j + 1)
    }
  }
}

const ans = []
const n = arr.length
for (let i = 0; i < n; i++) {
  const cur_s = arr[i]
  let cur_ans = null
  for (const s of gen(cur_s)) {
    if (arr.filter((_, j) => j !== i).every((str) => !str.includes(s))) {
      if (cur_ans === null) {
        cur_ans = s
      } else if (s.length < cur_ans.length) {
        cur_ans = s
      } else if (s.length === cur_ans.length && s < cur_ans) {
        cur_ans = s
      }
    }
  }
  ans.push(cur_ans || '')
}
return ans  
};
