/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
  const map = new Map()
  return helper(s, 0, new Set(wordDict), map)
};

function helper(str, idx, set, map) {
  if(idx === str.length) return true
  if(map.has(idx)) return map.get(idx)
  let res = false
  for(let i = idx; i < str.length; i++) {
    const tmp = str.slice(idx, i + 1)
    if(set.has(tmp)) {
      const bool = helper(str, i + 1, set, map)
      if(bool) {
        res = true
        break
      }
    }
  }
  map.set(idx, res)
  return res
}

// another


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
    const len = s.length;
    const dp = new Array(len).fill(false);

    for (let i = 0; i < len; i++) {
        for (let word of wordDict) {
            if (word.length <= i + 1 
                && s.substring(i - word.length + 1, i + 1) === word) {
                let index = i - word.length;
                if (index < 0)  {
                    dp[i] =  true;
                } else {
                    dp[i] = dp[index];
                }
                if(dp[i]) break;
            }
        }
    }

    return dp[len - 1];
};

// another

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
    const len = s.length;
    const f = new Array(len + 1).fill(false);

    f[0] = true;

    for(let i = 1; i <= len; i++){
        for(let str of wordDict){
            if(str.length <= i 
               && f[i - str.length] 
               && s.slice(i - str.length, i) === str){
                f[i] = true;
                break;
            }
        }
    }

    return f[len];
};


// another

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
  const set = new Set(wordDict)
  const dp = Array(s.length + 1).fill(false)
  dp[0] = true
  for(let i = 1; i <= s.length; i++) {
    for(let j = 0; j < i; j++) {
      if(dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  
  return dp[s.length]
};

