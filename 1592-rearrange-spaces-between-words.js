/**
 * @param {string} text
 * @return {string}
 */
const reorderSpaces = function(text) {
  let sc = 0
  for(let i = 0, len = text.length; i < len; i++) {
    if(text[i] === ' ') sc++
  }
  const arr = text.split(' ').filter(e => e!= '')
  const num = arr.length - 1
  const remain = num === 0 ? sc : sc % num
  const split = num === 0 ? 0 : Array( (sc / num) >> 0 ).fill(0).reduce((ac, el) => ac + ' ', '')
  let res = ''
  res = arr.join(split) + helper(remain)
  return res
};

function helper(n) {
  let res = ''
  for(let i = 0; i < n; i++) res += ' '
  return res
}
