/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const n = s.length, hash = {}
  let res = 0
  let i = -1
  for(j = 0;j < n; j++) {
    const e = s[j]
    if(hash[e] != null) i = Math.max(i, hash[e])
    hash[e] = j
    res = Math.max(res, j - i)
  }
  
  return res
};


// another

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  if(s.length < 2) return s.length
  const hash = {}
  let max = 0
  for(let i = 0, j = -1, len = s.length; i < len; i++) {
    const cur = s[i]
    if(hash[cur] != null) j = Math.max(j, hash[cur])
    
    hash[cur] = i
    max = Math.max(max, i - j)
  }
  
  return max
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const n = s.length, hash = {}
    let res = 0
    let l = 0, r = 0
    while(r < n) {
        const ch = s[r]
        if(hash[ch] == null) hash[ch] = 0
        hash[ch]++
        while(hash[s[l]] > 1) {
            hash[s[l]]--
            l++
        }
        while(l <= r && Object.keys(hash).length !== r - l + 1) {
            hash[s[l]]--
            if(hash[s[l]] === 0) delete hash[s[l]]
            l++
        }
        res = Math.max(res, r - l + 1)
        r++
    }

    return res
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  // var p=0, q=0; //p: start of the sub, q: end of the queue

  //hashmap in js????? Array.indexOf
  const sub = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let index = sub.indexOf(s.charAt(i));
    if (index == -1) {
      sub.push(s.charAt(i));
      // q++;
    } else {
      //find repeat, get index of repeat el, remve all el before that index
      sub = sub.slice(index + 1, sub.length);
      sub.push(s.charAt(i));
    }
    max = Math.max(max, sub.length);
  }
  return max;
};
