/**
 * @param {string} sentence
 * @return {number}
 */
const countValidWords = function(s) {
  const arr = s.split(' ')
  let res = 0
  for(const e of arr) {
    if(e.trim() && valid(e.trim())) res ++
  }
  return res
};
 
function valid(e) {
  const zi = '0'.charCodeAt(0), ni = '9'.charCodeAt(0)
  const len = e.length
  for(const el of e) {
    if(el.charCodeAt(0) >= zi && el.charCodeAt(0) <= ni) return false
  }
  const num = (p, n) => (p >= 'a' && p <= 'z') && (n >= 'a' && n <= 'z')
  const hi = e.indexOf('-')
  if(hi !== -1) {
    if(hi === 0 || hi === e.length - 1 || e.indexOf('-', hi + 1) !== -1 || !num(e[hi - 1], e[hi + 1])) return false
  }
  
  const p1 = e.indexOf('!')
  if(p1 !== -1) {
    if((len > 1 && p1 !== e.length - 1) || e.indexOf('-', p1 + 1) !== -1) return false
  }
  
  const p2 = e.indexOf('.')
  if(p2 !== -1) {
    if((len > 1 && p2 !== e.length - 1) || e.indexOf('-', p2 + 1) !== -1) return false
  }
  
  const p3 = e.indexOf(',')
  if(p3 !== -1) {
    if((len > 1 && p3 !== e.length - 1) || e.indexOf('-', p3 + 1) !== -1) return false
  }
  
  return true
}
