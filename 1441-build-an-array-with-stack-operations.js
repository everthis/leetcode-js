/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 const buildArray = function(target, n) {
  const res = []
  let ti = 0, ni = 1, num = 0
  while(num !== target.length && ni <= n) {
    if(ni !== target[ti]) {
      res.push('Push', 'Pop')
      ni++
    }else {
      res.push('Push')
      ni++
      num++
      ti++
    }
  }

  return res
};
