/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function(N, trust) {
  const arr = new Array(N + 1).fill(0)
  for(let [t, ted] of trust) {
    arr[t]--
    arr[ted]++
  }
  for(let i = 1; i <= N; i++) {
    if(arr[i] === N - 1) return i
  }
  return -1
};

// another

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function(N, trust) {
  const m = new Map()
  for(let i = 1; i<= N; i++) {
    const e = new Map()
    e.set('t', new Set())
    e.set('ted', new Set())
    m.set(i, e)
  }
  for(let [t, ted] of trust) {
    m.get(t).get('t').add(ted)
    m.get(ted).get('ted').add(t)
  }
  for(let [k,v] of m) {
    if(v.get('t').size === 0 && v.get('ted').size === N - 1) return k
  }
  return -1
};
