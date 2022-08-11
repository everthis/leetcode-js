/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 const findLongestWord = function(s, dictionary) {
  let res = ''
  for (const word of dictionary) {
    let j = 0
    for (let i = 0, len = s.length; i < len; i++) {
      if(word[j] === s[i]) j++
      if(j === word.length) {
        if(word.length > res.length) res = word
        else if(word.length === res.length && word < res) res = word
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
const findLongestWord = function (s, dictionary) {
  const n = dictionary.length
  const idxArr = Array(n).fill(0)
  let res = ''
  for (const ch of s) {
    for (let i = 0; i < n; i++) {
      const idx = idxArr[i]
      if (idx >= dictionary[i].length) continue
      if (ch === dictionary[i][idx]) {
        idxArr[i]++
      }

      if (
        idxArr[i] === dictionary[i].length &&
        (dictionary[i].length > res.length ||
          (dictionary[i].length === res.length && dictionary[i] < res))
      ) {
        res = dictionary[i]
      }
    }
  }
  return res
}


// another

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
