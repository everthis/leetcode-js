/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function(logs) {
  if(logs == null || logs.length === 0) return []
  const ll = []
  const dl = []
  const zero = '0'.charCodeAt(0)
  const nine = '9'.charCodeAt(0)
  for(let e of logs) {
    const arr = e.split(' ')
    if(arr[1].charCodeAt(0) >= zero && arr[1].charCodeAt(0) <= nine) {
      dl.push(arr)
    } else {
      ll.push(arr)
    }
  }
  const rll = ll.map(el => {
    const r = el.slice(1).join(' ')
    return [el[0], r]
  }).sort((a, b) => {
    if(a[1] < b[1]) return -1
    else if(a[1] > b[1]) return 1
    else {
      if(`${a[0]} ${a[1]}` > `${b[0]} ${b[1]}`) return 1
      else if(`${a[0]} ${a[1]}` < `${b[0]} ${b[1]}`) return -1
      else return 0
    }
  }).map(el => el.join(' '))
  
  const rdl = dl.map(el => el.join(' '))
  return rll.concat(rdl)
};
