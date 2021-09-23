/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = function(dominoes) {
  const hash = {}
  for (let dom of dominoes) {
    const [a, b] = dom
    const key = `${a},${b}`, alterKey = `${b},${a}`
    if (hash[key] == null && hash[alterKey] == null) {
      hash[key] = 1
    } else {
      if(hash[key] != null) hash[key] += 1
      else hash[alterKey] += 1
    }
  }

  let res = 0

  Object.keys(hash).forEach(k => {
    if(hash[k] > 1) res += sum(hash[k])
  })

  return res
};

function sum(n) {
  let res = 0
  while(n > 1) {
    res += n - 1
    n--
  }
  return res
}
