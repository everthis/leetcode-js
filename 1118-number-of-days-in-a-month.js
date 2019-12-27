/**

Given a year Y and a month M, return how many days there are in that month.

Example 1:

Input: Y = 1992, M = 7
Output: 31
Example 2:

Input: Y = 2000, M = 2
Output: 29
Example 3:

Input: Y = 1900, M = 2
Output: 28

Note:

1583 <= Y <= 2100
1 <= M <= 12

*/

/**
 * @param {number} Y
 * @param {number} M
 * @return {number}
 */
function numberOfDays(Y, M) {
  switch (M) {
    case 2:
      return Y % 400 === 0 || (Y % 4 === 0 && Y % 100 !== 0) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
}

// another

const numberOfDays = function(Y, M) {
    return new Date(Y,M,0).getDate();
};

// another

/**
 * @param {number} Y
 * @param {number} M
 * @return {number}
 */
const numberOfDays = function(Y, M) {
  const d = new Date(Y, M - 1)
  let num = 0
  while(d.getMonth() === M - 1) {
    num++
    const n = d.getDate()
    d.setDate(n + 1)
  }
  return num
};
