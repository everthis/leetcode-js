
/**
 * @param {number[]} arr
 * @return {number}
 */
const countTriplets = function(arr) {
  let res = 0
  const n = arr.length
  for(let i = 0; i < n; i++) {
    let xor = arr[i]
    for(let j = i + 1; j < n; j++) {
      xor ^= arr[j]
      if(xor === 0) res += j - i
    }
  }
  
  return res
};

// another

/**
 * @param {number[]} arr
 * @return {number}
 */
const countTriplets = function(arr) {
  arr.unshift(0)
  const n = arr.length
  let res = 0
  for(let i = 1; i < n; i++) {
    arr[i] ^= arr[i - 1]
  }
  const count = {}, total = {}
  for(let i = 0; i < n; i++) {
    if(count[arr[i]] == null) count[arr[i]] = 0
    if(total[arr[i]] == null) total[arr[i]] = 0
    res += count[arr[i]]++ * (i - 1) - total[arr[i]]
    total[arr[i]] += i
  }
  return res
};
