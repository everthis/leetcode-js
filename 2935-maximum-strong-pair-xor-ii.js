const maximumStrongPairXor= (nums) => {
  const A = nums
  let res = 0;
  for (let i = 20; i >= 0; --i) {
    res <<= 1;
    let pref = new Map();
    let pref2 = new Map();
    for (let a of A) {
      let p = a >> i;
      if (!pref.has(p)) {
        pref.set(p, a);
        pref2.set(p, a);
      }
      pref.set(p, Math.min(pref.get(p), a));
      pref2.set(p, Math.max(pref2.get(p), a));
    }
    for (let [x, val] of pref) {
      let y = res ^ 1 ^ x;
      if (x >= y && pref.has(y) && pref.get(x) <= pref2.get(y) * 2) {
        res |= 1;
        break;
      }
    }
  }
  return res;
}
