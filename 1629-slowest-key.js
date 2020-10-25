/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
const slowestKey = function(releaseTimes, keysPressed) {
  const m = {}
  const n = keysPressed.length
  const set = new Set()
  set.add(keysPressed[0])
  m[releaseTimes[0]] = set
  for(let i = 1; i < n; i++) {
    const k = releaseTimes[i] - releaseTimes[i - 1]
    if(m[k] == null) m[k] = new Set()
    m[k].add(keysPressed[i])
  }
  const keys = Object.keys(m).sort((a, b) => a - b)
  const last = keys[keys.length - 1]
  const arr = Array.from(m[last])
  arr.sort()
  return arr[arr.length - 1]
};
