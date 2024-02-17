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
