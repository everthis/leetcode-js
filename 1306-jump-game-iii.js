/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = function(arr, start) {
  const s = new Set()
  return helper(arr, start, s)
};

function helper(arr, start, s) {
  if(start < 0 || start >= arr.length || s.has(start)) return false
  s.add(start)
  if(arr[start] === 0) return true
  
  return helper(arr, start + arr[start], s) || helper(arr, start - arr[start], s)
}

// another

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = function (A, i) {
  return (
    0 <= i &&
    i < A.length &&
    A[i] >= 0 &&
    (!(A[i] = -A[i]) || canReach(A, i + A[i]) || canReach(A, i - A[i]))
  )
}

// another

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = function(arr, start) {
  const q = [start]
  const s = new Set()
  while(q.length) {
    const len = q.length
    for(let i = 0; i < len; i++) {
      const cur = q.shift()
      s.add(cur)
      if(arr[cur] === 0) return true
      if(!s.has(cur + arr[cur])) q.push(cur + arr[cur])
      if(!s.has(cur - arr[cur])) q.push(cur - arr[cur])
    }
  }
  return false
};

