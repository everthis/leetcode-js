/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
const evaluate = function(s, knowledge) {
  const map = {}
  for(let e of knowledge) {
    const [k, v] = e
    map[k] = v
  }
  const n = s.length
  let start = -1, end = 0
  let cur = ''
  const arr = []
  for(let i = 0; i < n; i++) {
    if(s[i] === '(') {
      start = i
      if(cur) {
        arr.push(cur)
        cur = ''
      }
      continue
    }
    else if(start !== -1 && s[i] !== ')') {
      cur += s[i]
    }
    else if(s[i] === ')') {
      if(cur in map) arr.push(map[cur])
      else arr.push('?')
      start = -1
      cur = ''
    } else {
      cur += s[i]
    }
    if(i === n - 1 && cur) arr.push(cur)
  }
  
  return arr.join('')
  
};
