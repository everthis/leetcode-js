/**
 * @param {number} n
 * @return {number}
 */
const checkRecord = function(n) {
  let P = 1
  let L1 = 1
  let L2 = 0
  let A = 1
  let pureP = 1
  let pureL1 = 1
  let pureL2 = 0
  const mod = 10 ** 9 + 7

  for (let i = 2; i < n + 1; i++) {
    const newP = (P + L1 + L2 + A) % mod
    const newL1 = (P + A) % mod
    const newL2 = L1
    const newA = (pureP + pureL1 + pureL2) % mod
    P = newP
    L1 = newL1
    L2 = newL2
    A = newA
    const newPureP = (pureP + pureL1 + pureL2) % mod
    const newPureL1 = pureP
    const newPureL2 = pureL1
    pureP = newPureP
    pureL1 = newPureL1
    pureL2 = newPureL2
  }
  return (P + L1 + L2 + A) % (10 ** 9 + 7)
}
