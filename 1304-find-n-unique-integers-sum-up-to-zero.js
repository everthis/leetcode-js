/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = function(n) {
  const num = ~~(n / 2)
  const odd = n % 2 === 1
  const res = pair(num)
  if(odd) res.push(0)
  return res
};

function pair(num) {
  const set = new Set()
  const res = []
  for(let i = 1; i <= num; i++) res.push(i, -i)
  return res
}
