/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = function(s, k) {
  let res = 0
  const a = 'a'.charCodeAt(0)
  const arr = []
  for(let ch of s) {
    arr.push(ch.charCodeAt(0) - a  + 1)
  }
  let str = arr.join('').split('').map(e => +e)
  let prev = str, sum = 0
  while(k > 0) {
    // let tmp = 0
    let tmp = prev.reduce((ac, e) => ac + e, 0)
    // console.log(tmp)
    prev = `${tmp}`.split('').map(e => +e)
    sum = tmp
    k--
  }
  
  return sum
};
