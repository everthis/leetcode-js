/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
  if(J == null || J === '' || S == null || S === '') return 0
  const m = new Set(J)
  let res = 0
  for(let e of S) {
    if(m.has(e)) res++
  }
  return res
};
