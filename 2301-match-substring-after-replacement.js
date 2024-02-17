/**
 * @param {string} ch
 */
function encode(ch) {
  let c = ch.charCodeAt(0)
  const a = 'a'.charCodeAt(0)
  const A = 'A'.charCodeAt(0)
  const zero = '0'.charCodeAt(0)
  if (c >= a) return c - a;
  if (c >= A) return c - A + 26;
  return c - zero + 52;
}

/**
 * @param {string} s
 * @param {string} sub
 * @param {character[][]} mappings
 * @return {boolean}
 */
const matchReplacement = function (s, sub, mappings) {
  const adj = Array(62 * 62).fill(0)
  const m = s.length, n = sub.length
  for(const ch of sub) adj[encode(ch) * 62 + encode(ch)] = 1
  for(const [f, t] of mappings) {
    adj[encode(f) * 62 + encode(t)] = 1
  }
  
  for(let i = m - n; i >= 0; i--) {
    for(let si = i, j = 0;; si++, j++) {
      if(j === n) return true
      if(adj[encode(sub[j]) * 62 + encode(s[si])] === 0) break
    }
  }
  
  return false
};


// another


let adj = new Uint8Array(3844);

/**
 * @param {string} ch
 */
function encode(ch) {
  let c = ch.charCodeAt();
  if (c >= 97) return c - 97;
  if (c >= 65) return c - 39;
  return c + 4;
}

/**
 * @param {string} s
 * @param {string} sub
 * @param {character[][]} mappings
 * @return {boolean}
 */
var matchReplacement = function (s, sub, mappings) {
  let n = s.length;
  let m = sub.length;

  adj.fill(0);
  for (let [cf, ct] of mappings) {
    adj[encode(cf) * 62 + encode(ct)] = 1;
  };
  for (let i = 0; i < 62; ++i) {
    adj[i * 62 + i] = 1;
  }

  for (let l = n - m; l >= 0; --l) {
    for (let d = 0, r = l; ; ++d, ++r) {
      if (d == m) return true;
      if (!adj[encode(sub[d]) * 62 + encode(s[r])]) break;
    }
  }

  return false;
};
