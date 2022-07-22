/**
 * @param {string} s
 * @return {string}
 */
const reorganizeString = function (s) {
  const freq = Array(26).fill(0)
  const a = 'a'.charCodeAt(0), n = s.length
  for(const e of s) {
    freq[e.charCodeAt(0) - a]++
  }
  let max = 0, maxIdx = 0
  for(let i = 0; i < 26; i++) {
    if(freq[i] > max) {
      max = freq[i]
      maxIdx = i
    }
  }

  if(max > (n + 1) / 2) return ''

  const res = Array(n)

  let idx = 0
  while(freq[maxIdx]) {
    res[idx] = String.fromCharCode(a + maxIdx)
    idx += 2
    freq[maxIdx]--
  }

  for(let i = 0; i < 26; i++) {
    while(freq[i]) {
      if(idx >= n) idx = 1
      res[idx] = String.fromCharCode(i + a)
      idx += 2
      freq[i]--
    }
  }

  return res.join('')
}

// another


/**
 * @param {string} S
 * @return {string}
 */
const reorganizeString = function(S) {
    if (!S || S.length <= 1) {
        return S;
    }
    const freqs = Array(26).fill(0);
    const acode = 'a'.charCodeAt(0);
    for (let i = 0, n = S.length; i < n; i++) {
        const index = S.charCodeAt(i) - acode;
        freqs[index]++;
        if (freqs[index] > Math.ceil(n / 2)) {
            return '';
        }
    }
    const list = [];
    for (let i = 0, n = S.length; i < 26; i++) {
        if (freqs[i] === 0) {
            continue;
        }
        list.push({ch: String.fromCharCode(i + acode), freq: freqs[i]});
    }
    list.sort((l1, l2) => l2.freq - l1.freq);
    const parts = [];
    for (let i = 0, n = list[0].freq; i < n; i++) {
        parts.push(list[0].ch);
    }
    let idx = 0;
    for (let i = 1, n = list.length; i < n; i++) {
        for (let j = 0, m = list[i].freq; j < m; j++) {
            idx %= list[0].freq;
            parts[idx++] += list[i].ch;
        }
    }
    return parts.join('');
};

// another

/**
 * @param {string} s
 * @return {string}
 */
const reorganizeString = function(s) {
  const arr = Array(26).fill(0), a = 'a'.charCodeAt(0)
  for(let ch of s) arr[ch.charCodeAt(0) - a]++
  let max = 0, idx = -1
  for(let i = 0; i < 26; i++) {
    if(arr[i] > max) {
      max = arr[i]
      idx = i
    }
  }
  const n = s.length
  const res = Array(n)
  if(max > (n + 1) / 2) return ''

  let i = 0
  while(arr[idx] > 0) {
    res[i] = String.fromCharCode(a + idx)
    i += 2
    arr[idx]--
  }
  
  for(let j = 0; j < 26; j++) {
    while(arr[j]) {
      if(i >= n) i = 1
      res[i] = String.fromCharCode(a + j)
      i += 2
      arr[j]--
    }
  }
  return res.join('')
};
