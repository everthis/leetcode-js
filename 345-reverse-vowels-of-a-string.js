/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
  if(s == null || s === '') return ''
  const arr = s.split('')
  let p = 0
  const len = s.length
  let e = s.length - 1
  const v = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  while(p < e) {
    while(v.indexOf(arr[p]) === -1 && p < e) p++
    while(v.indexOf(arr[e]) === -1 && p < e) e--
    const tmp = arr[p]
    arr[p] = arr[e]
    arr[e] = tmp          
    p++
    e--
  }
  return arr.join('')
};
