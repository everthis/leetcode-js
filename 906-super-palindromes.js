/**
 * @param {string} L
 * @param {string} R
 * @return {number}
 */
const superpalindromesInRange = function (L, R) {
  // My idea was to take the root of L and R and then generate all palindromes between those numbers,
  // and then put those palindromes to power 2 and check if those are palindrome as well.

  // The generation of palindromes is done like this:
  // Lets say i want all palindromes of length 4, then i take all numbers of length 2.
  // I reverse the length 2 numbers and concatenate them with themselves.
  // So "19" becomes "19" + "91". For odd length I do the same,
  //	but put a for loop around them that puts nrs 0 - 9 inside them.
  // So "19" + "0" + "91", then "19" + "1" + "91", etc.

  // Next I loop through the generated palindromes and just check whether they are
  // inside sqrt(L) and sqrt(R). (sqrt(L) < palin < sqrt(R))
  // For every palin within sqrt(L) and sqrt(R), i put the palin to power 2
  // (with BigInt!) and then check if that is a palindrome. If so, then count++;

  const sqL = Math.sqrt(L)
  const sqR = Math.sqrt(R)
  const sqR_Length = parseInt(sqR).toString(10).length
  // counting the valid super-palindromes
  let palins = 0
  // L is a superpalindrome
  if (
    isPalindrome(L) &&
    sqL === parseInt(sqL) &&
    isPalindrome(sqL.toString(10))
  )
    palins++
  // R is a superpalindrome
  if (
    isPalindrome(R) &&
    sqR === parseInt(sqR) &&
    isPalindrome(sqR.toString(10))
  )
    palins++

  let end
  if (sqR === parseInt(sqR)) {
    // or else the loop will possibly add R as well
    end = parseInt(sqR) - 1
  } else {
    end = parseInt(Math.floor(sqR))
  }

  let begin
  if (sqL === parseInt(sqL)) {
    // or else the loop will possibly add R as well
    begin = parseInt(sqL) + 1
  } else {
    begin = parseInt(Math.ceil(sqL))
  }

  // account for superpalins with for single digit 'sub-palins'
  if (begin <= 1 && end >= 1) palins++ // 1
  if (begin <= 2 && end >= 2) palins++ // 4
  if (begin <= 3 && end >= 3) palins++ // 9
  const length = sqR_Length
  const even = length % 2 === 0
  const half = Math.floor(length / 2)
  const pow10Half = Math.pow(10, half) // 10 or 100 or 1000, etc
  const pow10HalfMinOne = Math.pow(10, half - 1)
  let pal = '' // init
  let palinStr = '' // init
  let palin = -1 // init
  for (let i = 1, leni = pow10Half; i < leni; i++) {
    pal = i.toString(10)
    pal.padStart(half - pal.length, '0')
    palReverse = reverseStr(pal)
    // generate even length palindrome
    palinStr = pal + palReverse
    palin = parseInt(palinStr)
    if (palin >= begin && palin <= end) {
      if (isPalindromeInt(BigInt(palin) * BigInt(palin))) {
        palins++
      }
    }
    // If I generate all palindromes up until some even length,
    // lets say 4, then last step is to do length 2 + length 2 (19 + 91),
    // and not the 19 + 0 + 91 step that generates odd length palindromes.
    if (even && i >= pow10HalfMinOne) {
      continue
    }
    for (let j = 0, lenj = 10; j < lenj; j++) {
      // generate odd length palindrome
      palinStr = pal + j + palReverse
      palin = parseInt(palinStr)
      if (palin >= begin && palin <= end) {
        if (isPalindromeInt(BigInt(palin) * BigInt(palin))) {
          palins++
        }
      }
    }
  }
  return palins
}

const reverseStr = function (str) {
  return str.split('').reverse().join('')
}

const isPalindromeInt = function (nr) {
  nr = nr.toString(10)
  return nr === nr.split('').reverse().join('')
}
const isPalindrome = function (nr) {
  return nr === nr.split('').reverse().join('')
}
