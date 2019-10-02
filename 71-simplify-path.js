/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
  path = path.split('/').filter(s => !!s && s !== '.')
  while (path[0] === '..') path = path.slice(1)
  let result = []
  for (let val of path) {
    if (val === '..') result.pop()
    else result.push(val)
  }
  return '/' + result.join('/')
}
