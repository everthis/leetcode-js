/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
 const getMinSwaps = function (num, k) {
  const temp = num.split('')
  for (let i = 0; i < k; i++) nextPermutation(temp)
  return count(num.split(''), temp, temp.length)
}

function nextPermutation(a) {
  let i = a.length - 2
  //Find the first element which isn't in increasing order fom behind
  while (i >= 0 && a[i] >= a[i + 1]) i--
  //If we found an element
  if (i >= 0) {
    // Find the rightmost element such that a[j] > a[i]
    const j = bSearch(a, i + 1, a.length - 1, a[i])
    // swap a[i] and a[j]
    a[i] = a[i] ^ a[j] ^ (a[j] = a[i])
  }
  //reverse array from i + 1 till end
  reverse(a, i + 1, a.length - 1)
}

function bSearch(a, i, j, key) {
  while (i <= j) {
    const mid = (i + j) >>> 1
    if (key < a[mid]) i = mid + 1
    else j = mid - 1
  }
  return i - 1
}

function reverse(a, i, j) {
  while (i < j) a[i] = a[i] ^ a[j] ^ (a[j--] = a[i++])
}

function count(s1, s2, n) {
  let i = 0,
    j = 0,
    res = 0

  while (i < n) {
    j = i
    while (s1[j] != s2[i]) j++
    while (i < j) {
      const temp = s1[j]
      s1[j] = s1[j - 1]
      s1[j-- - 1] = temp
      ++res
    }
    ++i
  }
  return res
}
