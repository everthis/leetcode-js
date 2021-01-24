/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
  const arr = time.split('')
  let idx = time.indexOf('?')
  if(idx < 0) return time
  while(arr.indexOf('?') >= 0) {
      idx = arr.indexOf('?')
      let e
      if(idx === 0) {
        if(time[1] === '?') e = 2
        else if(+time[1] < 4) e =2
        else e = 1
        arr[0] = '' + e

      } else if(idx === 1) {
        if(+arr[0] > 1) e = 3
        else e = 9
        arr[1] = '' + e
      } else if(idx === 3) {
        e = 5
        arr[3] = '' + e
      } else if(idx === 4) {
        e = 9
        arr[4] = '' + e
      }      
  }

  return arr.join('')
};
