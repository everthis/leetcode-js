/**
 * @param {string[]} strings
 * @return {string[][]}
 */
const groupStrings = function(strings) {
  const m = {}
  for(let e of strings) {
    const key = gkey(e)
    let list
    if(m.hasOwnProperty(key)) {
      list = m[key]
    } else {
      list = []
    }
    list.push(e)
    m[key] = list
  }
  return Object.values(m)
};

function gkey(str) {
  let res = ''
  for(let i = 1, len = str.length; i < len; i++) {
    const diff = str.charCodeAt(i) - str.charCodeAt(i - 1)
    res += `${diff < 0 ? diff + 26 : diff},`
  }
  return res
}
