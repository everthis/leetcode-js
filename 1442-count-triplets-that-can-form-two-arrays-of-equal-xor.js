/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
  const n = arr.length
  const prefix = new Array(n + 1).fill(0)
  for(let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] ^ arr[i]
  }
  let res = 0, xor = 0
  const hash = {0: [-1]}
  for(let i = 0; i < n; i++) {
    const e = arr[i]
    xor ^= e
    if(hash[xor] === undefined) {
      hash[xor] = []
    } else {
        for(const prev of hash[xor]) {
            res += Math.max(0, i - prev - 1)
        }
    }
    hash[xor].push(i)
  }

  return res
};

// another
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
/*

you have an array : a[0], a[1].... a[n - 1]


First things first:
We need to understand small fact, if xor(a[0....i]) has appeared before at index j then it means xor(a[j+1.....i]) = 0
Another fact, if xor(a[i....j]) = 0 so this subarray will add (j - i - 1) to the answer.


Now say currently we are at index i and let xor([0...i]) = x.


Now say x has occurred 3 times previously at indices (i1, i2, i3)


our answer for i will be = (i - i1 - 1) + (i - i2 - 1) + (i - i3 - 1)


if you simplify this further you get f * i - (i1 + i2 + i3) - f = (i - 1) * f - (i1 + i2 + i3)


f = no. of times x has occurred previously.


(i1 + i2 + i3) = sum of all the indices where x has occurred previously.

*/
