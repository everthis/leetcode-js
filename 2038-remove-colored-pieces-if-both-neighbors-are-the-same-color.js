/**
 * @param {string} colors
 * @return {boolean}
 */
const winnerOfGame = function(colors) {
  let ac = 0, bc = 0
  for(let i = 1, n = colors.length; i < n - 1; i++) {
    if(colors[i] === 'A' && colors[i - 1] === 'A' && colors[i + 1] === 'A') ac++
    if(colors[i] === 'B' && colors[i - 1] === 'B' && colors[i + 1] === 'B') bc++
  }
  return ac > bc
};
