/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
const findSecretWord = function (wordlist, master) {
  let group = wordlist
  for (let i = 0; i < 10; i++) {
    let currentGuess = findTheTypical(group)
    let res = master.guess(currentGuess)
    if (res === 6) return
    let tmp = []
    for (let j = 0; j < group.length; j++) {
      if (diff(group[j], currentGuess) === 6 - res) tmp.push(group[j])
    }
    group = tmp
  }
}
function findTheTypical(wordlist) {
  const count = Array.from({ length: 6 }, (x) => new Object())
  for (let i = 0; i < wordlist.length; i++) {
    for (let j = 0; j < 6; j++) {
      const cur = wordlist[i][j]
      if (count[j][cur] === undefined) count[j][cur] = 1
      else count[j][cur]++
    }
  }
  let maxPos = 0,
    maxCount = 0,
    maxAlp = ''
  for (let i = 0; i < 6; i++) {
    for (let k of Object.keys(count[i])) {
      if (count[i][k] > maxCount) {
        maxCount = count[i][k]
        maxPos = i
        maxAlp = k
      }
    }
  }
  for (let i = 0; i < wordlist.length; i++) {
    if (wordlist[i][maxPos] === maxAlp) return wordlist[i]
  }
}
function diff(a, b) {
  let count = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) count++
  }
  return count
}
