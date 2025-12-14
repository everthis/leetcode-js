/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.split(' ')
  const set = new Set(['a', 'e', 'i', 'o', 'u'])
  let num = 0
  for(let i = 0; i < arr[0].length; i++) {
    const e = arr[0][i]
    if(set.has(e)) num++
  }

  const cnt = str => {
    let num = 0
    for(const e of str) {
      if(set.has(e)) num++
    }
    return num
  }

  for(let i = 1; i < arr.length; i++) {
    const str = arr[i]
    if(cnt(str) === num) arr[i] = str.split('').reverse().join('')
  }

  return arr.join(' ')
};
