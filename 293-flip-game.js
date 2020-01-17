/**
 * @param {string} s
 * @return {string[]}
 */
const generatePossibleNextMoves = function(s) {
  const list = []
  for (let i = -1; (i = s.indexOf('++', i + 1)) >= 0; )
    list.push(s.slice(0, i) + '--' + s.slice(i + 2))
  return list
}
