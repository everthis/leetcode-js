/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = function(sequence, word) {
  let count = 1;
  while (sequence.includes(word.repeat(count))) count += 1
  return count - 1;
};
