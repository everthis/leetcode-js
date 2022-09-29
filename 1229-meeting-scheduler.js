/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
const minAvailableDuration = function (slots1, slots2, duration) {
  const hash = {}
  for(const [s, e] of slots1) {
    if(hash[s] == null) hash[s] = 0
    if(hash[e] == null) hash[e] = 0

    hash[s]++
    hash[e]--
  }

  for(const [s, e] of slots2) {
    if(hash[s] == null) hash[s] = 0
    if(hash[e] == null) hash[e] = 0

    hash[s]++
    hash[e]--
  }

  const keys = Object.keys(hash).map(e => +e)
  keys.sort((a, b) => a - b)
  for(let i = 1; i < keys.length; i++) {
    hash[keys[i]] += hash[keys[i - 1]]
  }
    // console.log(keys, hash)
  const n = keys.length
  for(let i = 0; i < keys.length; i++) {
    const k = keys[i]
    if(hash[k] === 2 && i + 1 < n && valid(k, i)) {
      return [k, k + duration]
    }
  }

  return []
  
  function valid(k, idx) {
    let l = k, r = k + duration
    for(let i = idx + 1; i < keys.length && keys[i] < r; i++) {
      const key = keys[i]
      if(hash[key] !== 2) return false
    }

    return true
  }
}

// another

/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
const minAvailableDuration = function (slots1, slots2, duration) {
  slots1.sort((a, b) => a[0] - b[0])
  slots2.sort((a, b) => a[0] - b[0])

  const m = slots1.length, n = slots2.length
  let i = 0, j = 0

  while(i < m && j < n) {
    const start = Math.max(slots1[i][0], slots2[j][0])
    const end = Math.min(slots1[i][1], slots2[j][1])

    if(end - start >= duration) {
      return [start, start + duration]
    }

    if(slots1[i][1] > slots2[j][1]) j++
    else i++

  }

  return []
}
