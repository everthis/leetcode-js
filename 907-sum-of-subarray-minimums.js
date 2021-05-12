/**
 * @param {number[]} arr
 * @return {number}
 */
const sumSubarrayMins = function(arr) {
  const n = arr.length, s1 = [], s2 = [], left = Array(n), right = Array(n)
  for(let i = 0; i < n; i++) {
    let cnt = 1
    while(s1.length && s1[s1.length - 1][0] > arr[i]) {
      cnt += s1.pop()[1]
    }
    left[i] = cnt
    s1.push([arr[i], cnt])
  }
  
  for(let i = n - 1; i >= 0; i--) {
    let cnt = 1
    // use ">=" to deal with duplicate elements
    while(s2.length && s2[s2.length - 1][0] >= arr[i]) {
      cnt += s2.pop()[1]
    }
    right[i] = cnt
    s2.push([arr[i], cnt])
  }
  let res = 0
  const mod = 1e9 + 7
  for(let i = 0; i < n; i++) {
    // left[i] number of starting positions
    // right[i] number of ending positions
    res = (res + arr[i] * left[i] * right[i]) % mod
  }
  
  return res
};
