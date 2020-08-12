/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
const largestNumber = function(cost, target) {
  const m = new Map()
  const res = dfs(cost, 1, target, m)
  return res.indexOf('0') !== -1 ? '0' : res
};
function dfs(cost, index, remain, m) {
  if(remain === 0) return ''
  if(remain < 0 || index === cost.length + 1) return '0'
  if(m.has(remain)) return m.get(remain)
  const take = '' + index + dfs(cost, 1, remain - cost[index - 1], m)
  const skip = dfs(cost, index + 1, remain, m)
  const res = getBigger(take, skip)
  m.set(remain, res)
  return res
}
function getBigger(num1, num2) {
  if(num1.indexOf('0') !== -1) return num2
  if(num2.indexOf('0') !== -1) return num1
  if(num1.length > num2.length) return num1
  else if(num1.length < num2.length) return num2
  else return num1 > num2 ? num1 : num2
}
