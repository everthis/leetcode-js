/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function(logs) {
  const letterLog = [],
    digitLog = []
  for (let log of logs) {
    if (isNaN(log.split(' ')[1])) {
      letterLog.push(log)
    } else {
      digitLog.push(log)
    }
  }
  letterLog.sort((log1, log2) => {
    let body1 = log1.slice(log1.indexOf(' '))
    let body2 = log2.slice(log2.indexOf(' '))
    if (body1 === body2) {
      return log1.split(' ')[0] > log2.split(' ')[0] ? 1 : -1
    } else {
      return body1 > body2 ? 1 : -1
    }
  })
  return [...letterLog, ...digitLog]
}

// another

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
