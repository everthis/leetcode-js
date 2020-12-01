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

// another

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = function(sequence, word) {
  const s = sequence.length, w = word.length
  const max_repeat = (s / w) >> 0
  const failure = Array(w * max_repeat + 1).fill(0)
  const repeat_words = word.repeat(max_repeat) + '$'
  let result = 0, j = 0
  
  for(let i = 1, hi = repeat_words.length; i < hi; i++) {
    while(j > 0 && repeat_words[j] !== repeat_words[i]) j = failure[j - 1]
    j += (repeat_words[j] === repeat_words[i] ? 1 : 0)
    failure[i] = j
  }

  j = 0
  for(let i = 0, len = sequence.length; i < len; i++) {
    while(j > 0 && repeat_words[j] !== sequence[i]) j = failure[j - 1]
    j += (repeat_words[j] === sequence[i] ? 1 : 0)
    result = Math.max(result, (j / w) >> 0)
  }
  return result
};

