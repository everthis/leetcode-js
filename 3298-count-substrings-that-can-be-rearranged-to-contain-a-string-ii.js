/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function (word1, word2) {
  const mp1 = new Array(26).fill(0)
  const mp2 = new Array(26).fill(0)
  let count = 0

  for (const c of word2) {
    mp1[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  for (let i = 0; i < 26; i++) {
    if (mp1[i] > 0) {
      count += mp1[i]
    }
  }

  let res = 0
  let left = 0

  for (let right = 0; right < word1.length; right++) {
    mp2[word1.charCodeAt(right) - 'a'.charCodeAt(0)]++
    if (
      mp1[word1.charCodeAt(right) - 'a'.charCodeAt(0)] > 0 &&
      mp2[word1.charCodeAt(right) - 'a'.charCodeAt(0)] <=
        mp1[word1.charCodeAt(right) - 'a'.charCodeAt(0)]
    ) {
      count--
    }

    while (count === 0) {
      res += word1.length - right
      if (
        mp1[word1.charCodeAt(left) - 'a'.charCodeAt(0)] > 0 &&
        mp2[word1.charCodeAt(left) - 'a'.charCodeAt(0)] <=
          mp1[word1.charCodeAt(left) - 'a'.charCodeAt(0)]
      ) {
        count++
      }
      mp2[word1.charCodeAt(left) - 'a'.charCodeAt(0)]--
      left++
    }
  }

  return res
}

// another

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const validSubstringCount = function(word1, word2) {
  const n = word1.length;
  const target = Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for(const ch of word2) {
    target[ch.charCodeAt(0) - a]++;
  }
  const cur = Array(26).fill(0);
  let j = 0
  let res = 0
  for(let i = 0; i < n; i++) {
    const e = word1[i].charCodeAt(0) - a
    while(j < n && !valid(cur, target)) {
        cur[word1[j].charCodeAt(0) - a]++;
        j++
    }
    if(valid(cur, target)) {
      res += (n - 1) - (j - 1) + 1
    }
    cur[e]--;
  }

  return res

  function valid(arr, target) {
    for(let i = 0; i < 26; i++) {
      if(arr[i] < target[i]) {
        return false;
      }
    }
    return true;
  }
};
