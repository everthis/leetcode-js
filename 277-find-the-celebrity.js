/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
const solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
    if (n < 1) return -1
    let celebrity = 0
    for (let i = 1; i < n; i++) {
      if (knows(celebrity, i)) {
        celebrity = i
      }
    }
    for (let i = 0; i < celebrity; i++) {
      if (knows(celebrity, i)) {
        return -1
      }
    }
    for (let i = 0; i < n; i++) {
      if (i != celebrity && !knows(i, celebrity)) {
        return -1
      }
    }
    return celebrity
  }
}
