
/**
 * @param {number[]} arr
 * @return {number}
 */
 const sumSubarrayMins = function (arr) {
  const n = arr.length
  const mod = 1e9 + 7, stk = []
  const left = Array(n), right = Array(n)
  for(let i = 0; i< n; i++) {
    left[i] = i + 1
    right[i] = n - i
  }
  let res = 0
  for(let i = 0; i < n; i++) {
    while(stk.length && arr[stk[stk.length - 1]] > arr[i]) {
      const idx = stk.pop()
      right[idx] = i - idx
    }
    if (stk.length) left[i] = i - stk[stk.length - 1]
    stk.push(i)
    
  }
  for(let i = 0; i < n; i++) {
    res = (res + arr[i] * left[i] * right[i]) % mod
  }
  
  return res
}
 
// another

/**
 * @param {number[]} arr
 * @return {number}
 */
const sumSubarrayMins = function (arr) {
  const n = arr.length,
    s1 = [],
    s2 = [],
    left = Array(n),
    right = Array(n)
  for (let i = 0; i < n; i++) {
    let cnt = 1
    while (s1.length && s1[s1.length - 1][0] > arr[i]) {
      cnt += s1.pop()[1]
    }
    left[i] = cnt
    s1.push([arr[i], cnt])
  }

  for (let i = n - 1; i >= 0; i--) {
    let cnt = 1
    while (s2.length && s2[s2.length - 1][0] >= arr[i]) {
      cnt += s2.pop()[1]
    }
    right[i] = cnt
    s2.push([arr[i], cnt])
  }
  let res = 0
  const mod = 1e9 + 7
  for (let i = 0; i < n; i++) {
    // left[i] number of starting positions
    // right[i] number of ending positions
    res = (res + arr[i] * left[i] * right[i]) % mod
  }

  return res
}

// another

/**
 * @param {number[]} arr
 * @return {number}
 */
const sumSubarrayMins = function(arr) {
  const stk1 = [], stk2 = []
    const len = arr.length, mod = 1e9 + 7
    const left = new Array(len), right = new Array(len)
    for(let i = 0; i < len; i++) {
        left[i] = i + 1
        right[i] = len - i
    }
    for(let i = 0; i < len; i++) {
        while(stk1.length && arr[stk1[stk1.length - 1]] > arr[i]) {
            stk1.pop()
        }
        left[i] = i - (stk1.length ? stk1[stk1.length - 1] : -1)
        stk1.push(i)

        while(stk2.length && arr[stk2[stk2.length - 1]] > arr[i]) {
            let index = stk2.pop()
            right[index] = i - index
        }
        stk2.push(i)
    }

    let res = 0
    for(let i = 0; i < len; i++) {
        res = (res + arr[i] * left[i] * right[i]) % mod
    }
    return res
};
