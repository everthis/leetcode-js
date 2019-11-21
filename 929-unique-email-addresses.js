/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function(emails) {
  const res = new Set()
  emails.forEach(el => helper(el, res))
  return res.size
};

function helper(str, s) {
  const arr = str.split('@')
  const p = arr[0]
  const d = arr[1]
  let res = ''
  for(let i = 0, len = p.length; i < len; i++) {
    if(p[i] === '.') {
      continue
    } else if(p[i] === '+') {
      break
    } else {
      res += p[i]
    }
  }
  s.add(`${res}@${d}`)
}
