/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = function (paths) {
  const map = {}
  for (let text of paths) {
    for (let i = 1, files = text.split(' '); i < files.length; i++) {
      const paren = files[i].indexOf('(')
      const content = files[i].substring(paren + 1, files[i].length - 1)
      map[content] = map[content] || []
      map[content].push(files[0] + '/' + files[i].substr(0, paren))
    }
  }
  return Object.values(map).filter((dups) => dups.length > 1)
}
