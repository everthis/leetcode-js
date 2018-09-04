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
