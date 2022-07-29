/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
const longestDiverseString = function (a, b, c) {
  const arr = [['a', a], ['b', b], ['c', c]]
  
  let res = ''
  while(true) {
    arr.sort((a, b) => b[1] - a[1])
    if(res.length >= 2 && arr[0][0] === res[res.length - 1] && arr[0][0] === res[res.length - 2]) {
      if(arr[1][1] > 0) {
        res += arr[1][0]
        arr[1][1]--
      } else break
    } else {
      if(arr[0][1] > 0) {
        res += arr[0][0]
        arr[0][1]--
      } else break
    }
  }
  
  return res
};


// another


/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
const longestDiverseString = function (a, b, c) {
  return generate(a, b, c, "a", "b", "c");
};

function generate(a, b, c, ac, bc, cc) {
  if (a < b) return generate(b, a, c, bc, ac, cc);
  if (b < c) return generate(a, c, b, ac, cc, bc);
  if (b === 0) return ac.repeat(Math.min(2, a));
  let use_a = Math.min(2, a),
    use_b = a - use_a >= b ? 1 : 0;
  return (
    ac.repeat(use_a) +
    bc.repeat(use_b) +
    generate(a - use_a, b - use_b, c, ac, bc, cc)
  );
}

// another

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
const longestDiverseString = function (a, b, c) {
  const n = a + b + c
  let res = ''
  let A = 0, B = 0, C = 0
  for(let i = 0; i < n; i++) {
    if((a >= c && a >= b && A !== 2) || (B === 2 && a > 0) || (C === 2 && a > 0)) {
      A++
      res += 'a'
      a--
      B = 0
      C = 0
    } else if((b >= c && b >= a && B !== 2) || (A === 2 && b > 0) || (C === 2 && b)) {
      B++
      res += 'b'
      b--
      A = 0
      C = 0
    } else if((c >= a && c >= b && C !== 2) || (A === 2 && c) || (B === 2 && c)) {
      C++
      res += 'c'
      c--
      A = 0
      B = 0
    }
  }
  
  return res
};


