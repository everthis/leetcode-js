/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
  const set= new Set()
  bt(1, '0')
  bt(1, '1')
  return Array.from(set)
  
  function bt(i, cur) {
    if(i === n) {
      set.add(cur)
      return
    }
    const last = cur[cur.length - 1]
    if(last === '0') {
      bt(i + 1, cur + '1')
    } else {
      bt(i + 1, cur + '1')
      bt(i + 1, cur + '0')
    }
  }
};
