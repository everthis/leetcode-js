/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const placeWordInCrossword = function(board, word) {
  for (let state of [board, getRotated(board)])
    for (let chars of state)
      for (let token of chars.join('').split("#"))
        for (let letters of [word, word.split('').reverse().join('')])
          if (letters.length == token.length)
            if (canFit(letters, token))
              return true;
  return false;
}

function getRotated(board) {
  const m = board.length;
  const n = board[0].length;

  const rotated = Array.from({length: n}, () => Array(m));
  for (let i = 0; i < m; ++i)
    for (let j = 0; j < n; ++j)
      rotated[j][i] = board[i][j];
  return rotated;
}

function canFit(letters, token) {
  for (let i = 0; i < letters.length; ++i)
    if (token.charAt(i) != ' ' && token.charAt(i) != letters.charAt(i))
      return false;
  return true;
}
