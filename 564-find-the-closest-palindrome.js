/**
 * @param {bigint | string} n
 * @return {string}
 */
const nearestPalindromic = function(n) {
  let bigInt = null

  if (typeof n === 'bigint') bigInt = n
  if (typeof n === 'string') bigInt = BigInt(n)
  if (typeof n == null) throw new Error('unknown input type')

  // take the number, keep adding 1 to it, then check if it's a palindrome
  const prevPalindrome = getPrevPalindrome(bigInt)
  const nextPalindrome = getNextPalindrome(bigInt)

  const scalarPrev = bigInt - prevPalindrome
  const scalarNext = nextPalindrome - bigInt

  if (scalarPrev <= scalarNext) return prevPalindrome.toString()
  else return nextPalindrome.toString()
}

/**
 *
 * @param {bigint} number
 */
function getPrevPalindrome(number) {
  const decrementedNumber =
    typeof number === 'bigint' ? number - BigInt(1) : BigInt(number) - BigInt(1)

  if (decrementedNumber.toString().length === 1) return decrementedNumber

  const leftSide = getLeftSideNumber(decrementedNumber)
  const palindromedLeft = getPalindromeAsString(leftSide)

  const rightSide = getRightSideNumberAsString(decrementedNumber)
  const comparison = compareTwoValues(BigInt(palindromedLeft), BigInt(rightSide))
  if (comparison === 0) {
    // the right side is already the palindromedLeft - return the incrementedNumber
    return decrementedNumber
  }
  if (comparison === 1) {
    // this means the right side is already too far advanced (going downwards) compared to the palindromedLeft,
    // you need to take the leftSideWithBorder, decrement by 1, then return this new number concatenated with
    // the leftSide's palindrome - this is the answer
    const leftWithBorder = getLeftSideNumberWithBorder(decrementedNumber)
    const decremented = leftWithBorder - BigInt(1)

    if (decremented === BigInt(0)) return BigInt(9)

    const newWhole = BigInt(decremented.toString() + getRightSideNumberAsString(decrementedNumber))

    const newLeft = getLeftSideNumber(newWhole)
    const palindromedNewLeft = getPalindromeAsString(newLeft)
    return BigInt(decremented.toString() + palindromedNewLeft.toString())
  }
  if (comparison === -1) {
    // this means the right side can naturally increment to the palindromedLeft,
    // so you can just return the leftSideWithBorder concatenated with the palindromedLeft
    const leftSideWithBorder = getLeftSideNumberWithBorder(decrementedNumber)
    return BigInt(leftSideWithBorder.toString() + palindromedLeft)
  }
}

/**
 *
 * @param {bigint} number
 * @returns {*}
 */
function getNextPalindrome(number) {
  const incrementedNumber =
    typeof number === 'bigint' ? number + BigInt(1) : BigInt(number) + BigInt(1)

  if (incrementedNumber.toString().length === 1) return incrementedNumber

  const leftSide = getLeftSideNumber(incrementedNumber)
  const palindromedLeft = getPalindromeAsString(leftSide)

  const rightSide = getRightSideNumberAsString(incrementedNumber)
  const comparison = compareTwoValues(BigInt(palindromedLeft), BigInt(rightSide))
  if (comparison === 0) {
    // the right side is already the palindromedLeft - return the incrementedNumber
    return incrementedNumber
  }
  if (comparison === 1) {
    // this means the right side can naturally increment to the palindromedLeft,
    // so you can just return the leftSideWithBorder concatenated with the palindromedLeft
    const leftSideWithBorder = getLeftSideNumberWithBorder(incrementedNumber)
    const leftAsString = leftSideWithBorder.toString()
    const combined = leftAsString + palindromedLeft
    return BigInt(combined)
  }
  if (comparison === -1) {
    // this means the right side is already too far advanced compared to the palindromedLeft,
    // you need to take the leftSideWithBorder, increment by 1, then return this new number concatenated with
    // the leftSide's palindrome - this is the answer
    const leftWithBorder = getLeftSideNumberWithBorder(incrementedNumber)
    const incrementedLeftWithBorder = leftWithBorder + BigInt(1)
    const newWhole = BigInt(
      incrementedLeftWithBorder.toString() + getRightSideNumberAsString(incrementedNumber)
    )

    const newLeft = getLeftSideNumber(newWhole)
    const palindromedNewLeft = getPalindromeAsString(newLeft)
    return BigInt(incrementedLeftWithBorder.toString() + palindromedNewLeft.toString())
  }
}

/**
 *
 * @param {bigint} number
 */
function getLeftSideNumber(number) {
  const numberAsText = number.toString()
  const numCharsInLeftSide = Math.floor(numberAsText.length / 2)
  return BigInt(numberAsText.slice(0, numCharsInLeftSide))
}

/**
 *
 * @param {bigint} number
 * @returns {bigint}
 */
function getLeftSideNumberWithBorder(number) {
  const numberAsText = number.toString()
  const hasOddNumChars = numberAsText.length % 2 === 1

  const left = getLeftSideNumber(number)

  // should return the left side only, if it's an even-digited number
  // else, return the left side together with the border number (since it's an odd-digited number)
  if (hasOddNumChars) {
    const middleChar = numberAsText.charAt(Math.floor(numberAsText.length / 2))
    return BigInt(left.toString() + middleChar)
  } else {
    return BigInt(left.toString())
  }
}

/**
 *
 * @param {bigint} number
 * @returns {string}
 */
function getRightSideNumberAsString(number) {
  const numberAsText = number.toString()
  const numCharsInRightSide = Math.floor(numberAsText.length / 2)
  return numberAsText.slice(numberAsText.length - numCharsInRightSide)
}

/**
 *
 * @param {bigint} number
 * @returns {string}
 */
function getPalindromeAsString(number) {
  const numberAsText = number.toString()
  return numberAsText
    .split('')
    .reverse()
    .join('')
}

/**
 *
 * @param {bigint} number1
 * @param {bigint} number2
 * @returns {number}
 */
function compareTwoValues(number1, number2) {
  if (number1 < number2) return -1
  if (number1 === number2) return 0
  if (number1 > number2) return 1
}
