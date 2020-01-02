/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
const solution = function(read4) {
  const internalBuf = []
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
    let readChars = 0
    while (n > 0) {
      if (internalBuf.length === 0) {
        if (read4(internalBuf) === 0) {
          return readChars
        }
      }
      buf.push(internalBuf.shift())
      readChars++
      n--
    }
    return readChars
  }
}
