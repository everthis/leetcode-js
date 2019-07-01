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
