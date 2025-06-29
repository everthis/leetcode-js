/**
 * @param {string} s
 * @return {string[]}
 */
var partitionString = function(s) {
  const set = new Set()
  // set.add(s[0])
    let cur = ''
    for(let i = 0; i < s.length; i++) {
        cur += s[i]
        if(set.has(cur)) continue
        else {
            set.add(cur)
            cur = ''
        }
    }

  return Array.from(set)
};
