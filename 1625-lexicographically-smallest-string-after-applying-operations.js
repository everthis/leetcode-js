/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const findLexSmallestString = function(s, a, b) {
  let res = s
  const set = new Set()
  const q = [s]
  set.add(res)
  while(q.length) {
    const len = q.length
    for(let i = 0; i < len; i++) {
      const tmp = q.shift()
      const t1 = podd(tmp, a)
      const t2 = rotate(tmp, b)
      if(!set.has(t1)) {
        set.add(t1)
        q.push(t1)
      }
      if(!set.has(t2)) {
        set.add(t2)
        q.push(t2)
      }
      if(t1 < res) res = t1
      if(t2 < res) res = t2
    }
  }
  return res
};

function podd(s, num) {
  const arr = s.split('')
  for(let i = 1, len = s.length; i < len; i += 2) {
    const tmp = (+s[i] + num) % 10
    arr[i] = tmp
  }
  return arr.join('')
}

function rotate(s, num) {
  const len = s.length
  num = num % len
  const idx = len - num
  return s.slice(idx) + s.slice(0, idx)
}
