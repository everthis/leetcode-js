/**
 * @param {string} s
 * @return {number[]}
 */
const findPermutation = function(s) {
    const n = s.length
    const res = Array(n + 1)
    res[n]  = n + 1
    for (let i = 0, len = n; i < len;) {
        let j = i;
        while (j < len && s.charAt(j) === 'D') {
            j++;
        }
        for (let k = j - i; k >= 0; k--, j--) {
            res[i++] = j + 1;
        }
    }
    return res;
};

// another

/**
 * @param {string} s
 * @return {number[]}
 */
const findPermutation = function(s) {
  const n = s.length
  const res = Array(n)
  res[n] = n + 1
  for(let i = 0; i < n;) {
    let j = i
    while(j < n && s[j] === 'D') j++
    // console.log(j)
    for(let k = j - i + 1; k > 0; k--) {
      res[i] = j + 1
      i++
      j--
    }
  }

  return res
};


// another

/**
 * @param {string} s
 * @return {number[]}
 */
const findPermutation = function(s) {
  const n = s.length
  const arr = Array.from({ length: n + 1 }, (el, idx) => idx + 1)
  for(let h = 0; h < n; h++) {
    if(s.charAt(h) === 'D') {
      const l = h
      while(h < n && s.charAt(h) === 'D') h++
      reverse(arr, l, h)
    }
  }
  return arr
};

function reverse(arr, l, h) {
  while(l < h) {
    arr[l] ^= arr[h]
    arr[h] ^= arr[l]
    arr[l] ^= arr[h]
    l++, h--
  }
}
