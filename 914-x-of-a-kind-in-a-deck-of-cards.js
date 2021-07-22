/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = function(deck) {
  if(deck == null || deck.length <= 1) return false
  const hash = {}
  for(let e of deck) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  let res = 0
  for(let k in hash) res = gcd(hash[k], res)
  return res > 1
};

function gcd(a, b) {
  return b ? gcd(b, a % b) : a
}
