/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
const countCompleteSubstrings = function(word, k) {
  const arr = [], { abs } = Math
  const n = word.length
  const code = ch => ch.charCodeAt(0)
  let i = 0
  if(n === 1) arr.push(word)
  for(let j = 1; j < n; j++) {
    const pre = j - 1
    if(abs(word[j].charCodeAt(0) - word[pre].charCodeAt(0)) > 2) {
      arr.push(word.slice(i, j))
      i = j
    }
    if(j === n - 1) {
      arr.push(word.slice(i))
    }
  }
  // console.log(arr)
  let res = 0
  for(const str of arr) {
    if(str === '') continue
    res += helper(str)
  }

  return res


  function helper(str) {
    let res = 0
    const n = str.length, a = code('a')
    
    for(let i = 1; i <= 26; i++) {
      const len = i * k
      const arr = Array(26).fill(0)
      let pre = 0
      for(let j = 0; j < len && j < n; j++) {
        const idx = code(str[j]) - a
        arr[idx]++
      }
      if(valid(arr, i)) res++

      for(let j = len; j < n; j++) {
        const idx = code(str[j]) - a
        arr[idx]++
        const preIdx = code(str[pre]) - a
        arr[preIdx]--
        if(valid(arr, i)) res++
        pre++
      }
    }

    return res
  }

  function valid(arr, num) {
    let cnt = 0
    for(const e of arr) {
      if(e === 0) continue
      if(e !== k) return false
      else cnt++
    }

    if(cnt !== num) return false
    return true
  }
};

// another 


/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countCompleteSubstrings = function (word, k) {
  let w = word
  function calc(s) {
    let res = 0;
    let v = s.length;
    for (let i = 1; i < 27; i++) {
      if (i * k > v) break;
      let l = i * k;
      let len = i * k
      let cnt = {};
      for (let j = 0; j < l; j++) {
        if (cnt[s[j]] == null) {
          cnt[s[j]] = 0;
        }
        cnt[s[j]]++
      }
      let freq = {};
      for (let key in cnt) {
        if (freq[cnt[key]] == null) {
          freq[cnt[key]] = 0;
        }
        freq[cnt[key]]++;
      }
      // console.log(freq)

      if (freq[k] === i) res++;
      for (let idx = 0; idx < v - len; idx++) {
        if (cnt[s[idx]] == null) cnt[s[idx]] = 0
        if (freq[cnt[s[idx]]] == null) freq[cnt[s[idx]]] = 0
        freq[cnt[s[idx]]]--;
        cnt[s[idx]]--;
        if (freq[cnt[s[idx]]] == null) freq[cnt[s[idx]]] = 0
        freq[cnt[s[idx]]]++;

        if (cnt[s[idx + len]] == null) cnt[s[idx + len]] = 0
        if (freq[cnt[s[idx + len]]] == null) freq[cnt[s[idx + len]]] = 0
        freq[cnt[s[idx + len]]]--;
        cnt[s[idx + len]]++;
        if (freq[cnt[s[idx + len]]] == null) freq[cnt[s[idx + len]]] = 0
        freq[cnt[s[idx + len]]]++;
        if (freq[k] === i) res++;
      }
      // console.log(res, freq, cnt)
    }
    return res;
  }

  let idx = 0;
  let ans = 0;
  let n = w.length;
  for (let i = 1; i < n; i++) {
    if (Math.abs(w.charCodeAt(i) - w.charCodeAt(i - 1)) > 2) {
      ans += calc(w.slice(idx, i));
      idx = i;
    }
  }
  // console.log(ans, idx)
  ans += calc(w.slice(idx));
  return ans;
};
