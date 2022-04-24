/**
 * @param {number[][]} flowers
 * @param {number[]} persons
 * @return {number[]}
 */
const fullBloomFlowers = function(flowers, persons) {
  const arr = []
  for(const [s, e] of flowers) {
    arr.push([s, 1])
    arr.push([e, 3])
  }
  for(let i = 0; i < persons.length; i++) {
    arr.push([persons[i], 2, i])
  }
  arr.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  const res = []
  let cnt = 0
  for(let e of arr) {
    if(e[1] === 1) cnt++
    else if(e[1] === 3) cnt--
    else {
      res[e[2]] = cnt
    }
  }

  return res
};
