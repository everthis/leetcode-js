/**
 * @param {string[]} source
 * @return {string[]}
 */
const removeComments = function (source) {
  const code = source.join('\n')
  const isBlockStart = (c, i) => c[i] === '/' && c[i + 1] === '*'
  const isBlockEnd = (c, i) => c[i] === '*' && c[i + 1] === '/'
  const isLineStart = (c, i) => c[i] === '/' && c[i + 1] === '/'
  const isNewLine = (c, i) => c[i] === '\n'
  let i = 0,
    output = ''

  while (i < code.length) {
    if (isBlockStart(code, i)) {
      i += 2
      while (!isBlockEnd(code, i) && i < code.length) i++
      i += 2
    } else if (isLineStart(code, i)) {
      i += 2
      while (!isNewLine(code, i) && i < code.length) i++
    } else {
      output += code[i++]
    }
  }

  return output.split('\n').filter((l) => l.length)
}
