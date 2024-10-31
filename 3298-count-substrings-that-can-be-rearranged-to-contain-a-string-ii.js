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
  const targetCnt = target.reduce((acc, cur) => acc += cur > 0 ? 1 : 0, 0);
  const cur = Array(26).fill(0);

  let j = 0
  let cnt = 0
  let res = 0
  for(let i = 0; i < n; i++) {
    const e = word1[i].charCodeAt(0) - a
    while(j < n && cnt < targetCnt) {
        const idx= word1[j].charCodeAt(0) - a;
        cur[idx]++;
        if(cur[idx] === target[idx]) {
          cnt++;
        }
        j++
    }
    if(cnt === targetCnt) {
      res += (n - 1) - (j - 1) + 1
    }
    cur[e]--;
    if(cur[e] === target[e] - 1) {
      cnt--;
    }
  }
  return res
};

// another



function validSubstringCount(w1, w2) {
    const cnt = {};
    for (const ch of w2) {
        cnt[ch] = (cnt[ch] || 0) + 1;
    }
    let match = Object.keys(cnt).length, res = 0, j = 0;

    for (let i = 0; i < w1.length; i++) {
        cnt[w1[i]] = (cnt[w1[i]] || 0) - 1;
        match -= cnt[w1[i]] === 0 ? 1 : 0;

        while (match === 0) {
            res += w1.length - i;
            match += cnt[w1[j]] === 0 ? 1 : 0;
            cnt[w1[j]] = (cnt[w1[j]] || 0) + 1;
            j++;
        }
    }
    return res;
}

// another

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
