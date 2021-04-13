/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = function(deck) {
  const n= deck.length;

  deck.sort((a, b) => a - b)
  const q = [];
  for (let i=0; i<n; i++) q.push(i);
  const res = new Array(n).fill(0);
  for (let i=0; i<n; i++){
    res[q.shift()]=deck[i];
    q.push(q.shift());
  }
  return res;
};
