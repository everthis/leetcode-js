/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function(n) {
  const dp = Array(n + 1).fill(0)
  dp[2] = 1
  for(let i = 3; i <= n; i++) {
    for(let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * Math.max(i - j, dp[i - j]))
    }
  }
  return dp[n]
};

// another

/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function(n) {
  if (n <= 2) return 1;

  const maxArr = [];
  for (let i = 0; i < n + 1; i++) {
    maxArr[i] = 0;
  }

  /** For a number i: write i as a sum of integers, then take the product of those integers.
   maxArr[i] = maximum of all the possible products */

  maxArr[1] = 0;
  maxArr[2] = 1; // 2=1+1 so maxArr[2] = 1*1

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      /** Try to write i as: i = j + S where S=i-j corresponds to either one number or a sum of two or more numbers
        
        Assuming that j+S corresponds to the optimal solution for maxArr[i], we have two cases:
        (1) i is the sum of two numbers, i.e. S=i-j is one number, and so maxArr[i]=j*(i-j)
        (2) i is the sum of at least three numbers, i.e. S=i-j is a sum of at least 2 numbers,
        and so the product of the numbers in this sum for S is maxArr[i-j]
        (=maximum product after breaking up i-j into a sum of at least two integers):
        maxArr[i] = j*maxArr[i-j]
        */
      maxArr[i] = Math.max(maxArr[i], j * (i - j), j * maxArr[i - j]);
    }
  }
  return maxArr[n];
};

// another

/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function(n) {
  if(n === 2) return 1
  if(n === 3) return 2
  let num = ~~(n / 3)
  let rem = n % 3
  if(rem === 1) {
    rem += 3
    num--
  }
  return rem === 0 ? Math.pow(3, num) : Math.pow(3, num) * rem
};

/**

If an optimal product contains a factor f >= 4, 
then you can replace it with factors 2 and f-2 without losing optimality,
as 2*(f-2) = 2f-4 >= f. So you never need a factor greater than or equal to 4,
meaning you only need factors 1, 2 and 3 (and 1 is of course wasteful and you'd only use it for n=2 and n=3, where it's needed).

For the rest I agree, 3*3 is simply better than 2*2*2, so you'd never use 2 more than twice.

*/
