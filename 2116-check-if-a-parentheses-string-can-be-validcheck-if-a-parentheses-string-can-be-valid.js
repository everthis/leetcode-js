/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
const canBeValid = function(s, locked) {
  const n = s.length
  if(n % 2 === 1) return false
  let x = 0
  for(let i = 0; i < n; i++) {
    if(s[i] === '(' || locked[i] === '0') x++
    else if(x > 0) x--
    else return false
  }
  x = 0
  for(let i = n - 1; i >= 0; i--) {
    if(s[i] === ')' || locked[i] === '0') x++
    else if(x > 0) x--
    else return false
  }
  return true
};

// another

/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
const canBeValid = function (s, locked) {
  return s.length % 2 === 0 && chk(s, locked, '(') && chk(s, locked, ')')

  function chk(s, locked, op) {
    let bal = 0,
      wild = 0,
      sz = s.length
    let start = op === '(' ? 0 : sz - 1,
      dir = op === '(' ? 1 : -1
    for (let i = start; i >= 0 && i < sz && wild + bal >= 0; i += dir) {
      if (locked[i] === '1') bal += s[i] === op ? 1 : -1
      else wild++
    }
    return Math.abs(bal) <= wild
  }
}
