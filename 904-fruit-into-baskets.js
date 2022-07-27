/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = function (fruits) {
  let n = fruits.length
  let i = 0, j = 0
  const map = new Map()
  let res = 0
  for(;j < n; j++) {
    const e = fruits[j]
    if(!map.has(e)) map.set(e, 1)
    else map.set(e, map.get(e) + 1)

    while(map.size > 2 && i < n) {
      const tmp = fruits[i++]
      map.set(tmp, map.get(tmp) - 1)
      if(map.get(tmp) === 0) {
        map.delete(tmp)
      }
    }
    res = Math.max(res, j - i + 1)
  }

  return res
}
