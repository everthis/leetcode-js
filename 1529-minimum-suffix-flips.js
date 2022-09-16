/**
 * @param {string} target
 * @return {number}
 */
const minFlips = function (target) {
  const n = target.length
  let res = 0, flip = 0

  for(let i = 0; i < n; i++) {
    if(target[i] === '0' && flip % 2 === 0) continue
    if(target[i] === '1' && flip % 2 === 1) continue
    flip++
    res++
  }

  return res
}
