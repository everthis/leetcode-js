/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
const minHeightShelves = function(books, shelf_width) {
  const dp = new Array(books.length + 1)
  dp[0] = 0
  for(let i = 1; i <= books.length; i++) {
    let width = books[i - 1][0]
    let height = books[i - 1][1]
    dp[i] = dp[i - 1] + height
    for(let j = i - 1; j > 0 && width + books[j - 1][0] <= shelf_width; j--) {
      height = Math.max(height, books[j - 1][1])
      width += books[j - 1][0]
      dp[i] = Math.min(dp[i], dp[j - 1] + height)
    }
  }
  return dp[books.length]
};

// another

/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
const minHeightShelves = function(books, shelf_width) {
  const n = books.length, dp = Array(1001).fill(Infinity)
  dp[0] = 0
  for(let i = 0; i < n; i++) {
    let sum = 0, mx = 0
    for(let j = i; j >= 0 && sum + books[j][0] <= shelf_width; j--) {
      sum += books[j][0]
      mx = Math.max(mx, books[j][1])
      dp[i + 1] = Math.min(dp[i + 1], dp[j] + mx)
    }
  }
  return dp[n]
};

// another

/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
 const minHeightShelves = function(books, shelf_width) {
  const n = books.length, dp = Array(1001)
  dp[0] = 0

  for(let i = 0; i < n; i++) {
    let [w, h] = books[i]
    dp[i + 1] = dp[i] + h
    for(let j = i - 1; j >= 0 && w + books[j][0] <= shelf_width; j--) {
      h = Math.max(h, books[j][1])
      w += books[j][0]
      dp[i + 1] = Math.min(dp[i + 1], dp[j] + h) 
    }
  }

  return dp[n]
};
