/**
 * @param {number[]} books
 * @return {number}
 */
var maximumBooks = function (books) {
  const len = books.length
  const dp = new Array(len).fill(0)

  // dp[i] represents max number of books that can be taken
  // between shelf 0 and shelf i (both inclusive)

  // use monotonic stack to populate dp array; for every index i,
  // find the nearest break point j < i such that books[i - j] <
  // books[i] - i + j

  // this becomes the restraining point for picking books as now
  // instead of picking (books[i] - i + j) books, we can only pick
  // books[i - j] books; so we will pick the maximum dp[j] books +
  // (books[i] + books[i] - 1 + books[i] - 2 + ... + books[i] - (i - j - 1))
  const stack = []
  let maxBooks = 0

  for (let i = 0; i < len; i++) {
    while (stack.length && books[peek(stack)] >= books[i] - i + peek(stack))
      stack.pop()

    // pick dp[j] books and (books[i] + books[i] - 1 + ... + books[i] -
    // (i - j - 1)) books, where j is the current stack top; the latter
    // expression can be rewritten as a difference of two n-summations
    dp[i] =
      (stack.length === 0 ? 0 : dp[peek(stack)]) +
      getSummation(books[i]) -
      getSummation(books[i] - i + (stack.length === 0 ? -1 : peek(stack)))

    maxBooks = Math.max(maxBooks, dp[i])
    stack.push(i)
  }

  return maxBooks
}

function getSummation(n) {
  if (n < 0) return 0
  return (n * (n + 1)) / 2
}

function peek(arr) {
  return arr[arr.length - 1]
}
