const N = 34
const checkIthBit64 = (x, i) => {
  let s = x.toString(2),
    n = s.length
  for (let j = 0; j < n; j++) {
    if (n - j - 1 == i && s[j] == '1') return 1
  }
  return 0
}

/**
 * @param {number[]} receiver
 * @param {number} k
 * @return {number}
 */
var getMaxFunctionValue = function(receiver, k) {
  const a = receiver
  let n = a.length,
    ia = [],
    res = [],
    iaP = [...a],
    resP = [...a]
  for (let i = 0; i < n; i++) {
    ia.push(i)
    res.push(i)
  }
  for (let i = 0; i < N; i++) {
    if (checkIthBit64(k, i)) {
      ;[res, ia] = update(res, resP, ia, iaP)
    }
    resP = updateResP(res, resP, iaP)
    iaP = updateIaP(iaP)
  }
  return Math.max(...res) 
};

const update = (cur, curP, ia, iaP) => {
  let n = cur.length,
    nextRes = [],
    nextPos = []
  for (let i = 0; i < n; i++) {
    nextRes.push(cur[i] + curP[ia[i]])
    nextPos.push(ia[iaP[i]])
  }
  return [nextRes, nextPos]
}

const updateResP = (cur, curP, iaP) => {
  let n = cur.length,
    next = []
  for (let i = 0; i < n; i++) next.push(curP[i] + curP[iaP[i]])
  return next
}

const updateIaP = (iaP) => {
  let n = iaP.length,
    next = []
  for (let i = 0; i < n; i++) next.push(iaP[iaP[i]])
  return next
}
