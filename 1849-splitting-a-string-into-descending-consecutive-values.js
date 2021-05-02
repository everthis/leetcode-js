/**
 * @param {string} s
 * @return {boolean}
 */
const splitString = function(s) {
  return dfs(s, 0, [Infinity])
};

function dfs(str, idx, arr) {
  if(idx >= str.length && arr.length > 2) return true
  for(let i = idx; i < str.length; i++) {
    const tmp = str.slice(idx, i + 1)
    const num = parseInt(tmp, 10)
    const pre = arr[arr.length - 1]
    if(num < pre && (pre === Infinity || pre - num === 1)) {
      arr.push(num)
      if(dfs(str, i + 1, arr)) return true      
      arr.pop()
    }
  }
  return false
}
