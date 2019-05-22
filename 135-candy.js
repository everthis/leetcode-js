/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = function(ratings) {
  const candies = new Array(ratings.length).fill(1);
  for (let i = 1; i < candies.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  let sum = candies[candies.length - 1];
  for (let i = candies.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
    sum += candies[i];
  }
  return sum;
};
