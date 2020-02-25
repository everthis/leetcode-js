/**

Think about Zuma Game. You have a row of balls on the table, colored red(R), yellow(Y), blue(B), green(G), and white(W).
You also have several balls in your hand.

Each time, you may choose a ball in your hand, and insert it into the row (including the leftmost place and rightmost place).
Then, if there is a group of 3 or more balls in the same color touching, remove these balls.
Keep doing this until no more balls can be removed.

Find the minimal balls you have to insert to remove all the balls on the table.
If you cannot remove all the balls, output -1.

Example 1:

Input: board = "WRRBBW", hand = "RB"
Output: -1
Explanation: WRRBBW -> WRR[R]BBW -> WBBW -> WBB[B]W -> WW
Example 2:

Input: board = "WWRRBBWW", hand = "WRBRW"
Output: 2
Explanation: WWRRBBWW -> WWRR[R]BBWW -> WWBBWW -> WWBB[B]WW -> WWWW -> empty
Example 3:

Input: board = "G", hand = "GGGGG"
Output: 2
Explanation: G -> G[G] -> GG[G] -> empty 
Example 4:

Input: board = "RBYYBBRRB", hand = "YRBGB"
Output: 3
Explanation: RBYYBBRRB -> RBYY[Y]BBRRB -> RBBBRRB -> RRRB -> B -> B[B] -> BB[B] -> empty 
 

Constraints:

You may assume that the initial row of balls on the table won’t have any 3 or more consecutive balls with the same color.
The number of balls on the table won't exceed 16, and the string represents these balls is called "board" in the input.
The number of balls in your hand won't exceed 5, and the string represents these balls is called "hand" in the input.
Both input strings will be non-empty and only contain characters 'R','Y','B','G','W'.

*/

/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
const findMinStep = function(board, hand) {
  const map = {}
  for (let c of hand) map[c] = (map[c] || 0) + 1
  const res = helper(board, map)
  return res === Number.MAX_VALUE ? -1 : res
}

function helper(s, m) {
  const str = reduce(s)
  if (str.length === 0) return 0
  let res = Number.MAX_VALUE
  let i = 0
  while (i < str.length) {
    const beg = i
    while (i < str.length && str[i] === str[beg]) {
      i++
    }
    if (m[str[beg]] >= 3 - (i - beg)) {
      const dval = 3 - i + beg
      m[str[beg]] -= dval
      const tmp = helper(s.slice(0, beg) + s.slice(i), m)
      m[str[beg]] += dval
      if (tmp !== Number.MAX_VALUE) res = res < tmp + dval ? res : tmp + dval
    }
  }
  return res
}
function reduce(str) {
  let res = ''
  let i = 0
  while (i < str.length) {
    const beg = i
    while (i < str.length && str[beg] === str[i]) {
      i++
    }
    if (i - beg >= 3) {
      return reduce(str.slice(0, beg) + str.slice(i))
    }
  }
  return str
}
