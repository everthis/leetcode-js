/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function(n) {
  //Keeps track of the # of valid solutions
  let count = 0;

  //Helps identify valid solutions
  const done = Math.pow(2, n) - 1;

  //Checks all possible board configurations
  const innerRecurse = function(ld, col, rd) {
    //All columns are occupied,
    //so the solution must be complete
    if (col === done) {
      count++;
      return;
    }

    //Gets a bit sequence with "1"s
    //whereever there is an open "slot"
    let poss = ~(ld | rd | col);

    //Loops as long as there is a valid
    //place to put another queen.
    while (poss & done) {
      let bit = poss & -poss;
      poss -= bit;
      innerRecurse((ld | bit) >> 1, col | bit, (rd | bit) << 1);
    }
  };

  innerRecurse(0, 0, 0);

  return count;
};
