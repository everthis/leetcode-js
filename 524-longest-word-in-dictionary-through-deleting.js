/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
const findLongestWord = function(s, dictionary) {
  let res = ''
  for(let d of dictionary) {
    let j = 0
    for(let i = 0, n = s.length; i < n; i++) {
      if(d[j] === s[i]) j++
      if(j === d.length && j >= res.length) {
        if(j > res.length || d < res) {
          res = d
        }
        break
      }
    }
  }
  return res
};

// another

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
const findLongestWord = function(s, dictionary) {
  dictionary.sort((a, b) => a.length === b.length ? cmp(a, b) : b.length - a.length)
  let res = ''
  for(let d of dictionary) {
    let j = 0
    for(let i = 0, n = s.length; i < n; i++) {
      if(d[j] === s[i]) j++
      if(j === d.length) return d
    }
  }
  return ''
  function cmp(s1, s2) {
    for(let i = 0, n = s1.length; i < n; i++) {
      if(s1[i] < s2[i]) return -1
      else if(s1[i] > s2[i]) return 1
    }
    return 0
  }
};

// another


/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
const findLongestWord = function(s, d) {
  let results = [];
  let maxLen = 0;
  for (const word of d) {
    let j = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === word[j]) {
        j++;
        if (j === word.length) break;
      }
    }
    if (j === word.length && word.length >= maxLen) {
      if (word.length > maxLen) {
        maxLen = word.length;
        results = [];
      }
      results.push(word);
    }
  }
  
  let result = results[0];
  for (let i = 1; i < results.length; i++) {
    if (results[i] < result) result = results[i];
  }
  return result || '';
}
