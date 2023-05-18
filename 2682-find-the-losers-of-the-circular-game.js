/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
  const set = new Set()
  let i = 0, turn = 1
  while(!set.has(i + 1)) {
    set.add(i + 1)
    i = (i + turn * k) % n
    turn++
  }
  const res = []
  for(let j = 1; j<=n;j++) {
    if(!set.has(j)) res.push(j)
  }
  return res
};
