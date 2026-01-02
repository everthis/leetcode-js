/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
  const n = s.length;
  let res = 1
  const { max } = Math

  // single
  let len = 1
  for(let i = 1; i < n; i++) {
    if(s[i] === s[i - 1]) {
      len++
    } else {
      len = 1
    }
    res = max(res, len)
  }

  // two
  h(s, 'a', 'b', res)
  h(s, 'a', 'c', res)
  h(s, 'b', 'c', res)

  // three
  const hash = {}
  // a, b, c
  const cnt = Array(3).fill(0)
  hash[`0,0`] = -1
  const a = 'a'.charCodeAt(0)
  const key = (a, b) => `${a},${b}`
  for(let i = 0; i < n; i++) {
    const ch = s[i]
    const k = ch.charCodeAt(0) - a
    cnt[k]++
    const ab = cnt[0] - cnt[1]
    const ac = cnt[0] - cnt[2]
    if(hash[key(ab, ac)] != null) {
      res = max(res, i - hash[key(ab, ac)])
    } else {
      hash[key(ab, ac)] = i
    }
  }


  return res

  function h(s, x, y, ma) {
    let num = 0
    let hash = {0: -1}
    for(let i = 0; i < s.length; i++) {
      const ch = s[i]
      if(ch === x) {
        num++
      } else if(ch === y) {
        num--
      } else {
        num = 0
        hash = {0: i}
      }
      if(hash[num] != null) {
        res = max(res, i - hash[num])
      } else {
        hash[num] = i
      }
    }
  }

};


// another


/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    const n = s.length;
    let ans = 0;
    let i = 0;

    while (i < n) {
        let j = i;
        while (j < n && s[j] === s[i]) j++;
        ans = Math.max(ans, j - i);
        i = j;
    }

    const best2 = (x, y, third) => {
        let best = 0;
        let i = 0;
        while (i < n) {
            if (s[i] === third) { i++; continue; }
            const st = i;
            let bal = 0;
            const fst = new Map();
            fst.set(0, st);
            let j = st;
            while (j < n && s[j] !== third) {
                bal += s[j] === x ? 1 : -1;
                if (!fst.has(bal)) fst.set(bal, j + 1);
                else best = Math.max(best, j + 1 - (fst.get(bal)));
                j++;
            }
            i = j;
        }
        return best;
    };

    ans = Math.max(ans, best2('a', 'b', 'c'));
    ans = Math.max(ans, best2('a', 'c', 'b'));
    ans = Math.max(ans, best2('b', 'c', 'a'));

    let ca = 0, cb = 0, cc = 0;
    const mp = new Map();
    mp.set("0,0", -1);

    for (let i = 0; i < n; i++) {
        if (s[i] === 'a') ca++;
        else if (s[i] === 'b') cb++;
        else cc++;
        const key = `${ca - cb},${ca - cc}`;
        if (mp.has(key)) ans = Math.max(ans, i - mp.get(key));
        else mp.set(key, i);
    }

    return ans;
};
