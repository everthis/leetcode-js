/**
 * @param {string[]} strs
 * @return {string}
 */
const splitLoopedString = function (strs) {
  let ans = ''
  const n = strs.length
  if (n === 0) return ''
  findMaxStrings(strs)
  for (let i = 0; i < n; ++i) {
    solve(strs, i, true)
    solve(strs, i, false)
  }
  return ans
  function findMaxStrings(strs) {
    for (let i = 0; i < n; ++i) {
      const temp = strs[i].split('').reverse().join('')
      strs[i] = strs[i] > temp ? strs[i] : temp
    }
  }
  function solve(strs, i, flag) {
    let temp = strs[i]
    if (flag) {
      temp = temp.split('').reverse().join('')
    }
    let size = temp.length
    let str1 = '',
      str2 = ''
    for (let j = i + 1; j < n; ++j) str1 += strs[j]
    for (let j = 0; j < i; ++j) str2 += strs[j]
    for (let k = 0; k < size; ++k) {
      let newOne = temp.substr(k) + str1 + str2 + temp.substr(0, k)
      ans = ans === '' ? newOne : ans > newOne ? ans : newOne
    }
  }
}
