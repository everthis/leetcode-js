/**
 * @param {string} s
 * @return {string}
 */
const robotWithString = function (s) {
  const stk = []
  const freq = Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  for (const ch of s) {
    freq[ch.charCodeAt(0) - a]++
  }

  let res = ''

  for (const ch of s) {
    stk.push(ch)
    freq[ch.charCodeAt(0) - a]--
    while (stk.length && stk[stk.length - 1] <= helper(freq)) {
      const e = stk.pop()
      res += e
    }
  }

  while (stk.length) {
    res += stk.pop()
  }

  return res

  function helper(arr) {
    const a = 'a'.charCodeAt(0)
    for (let i = 0; i < 26; i++) {
      if (arr[i] !== 0) return String.fromCharCode(a + i)
    }

    return ''
  }
}


// another

const ord = (c) => c.charCodeAt();
const char = (ascii) => String.fromCharCode(ascii);
/**
 * @param {string} s
 * @return {string}
 */

const robotWithString = (s) => {
    let f = Array(26).fill(0), t = [], res = '';
    for (const c of s) f[ord(c) - 97]++;
    for (const c of s) {
        f[ord(c) - 97]--;
        t.push(c);
        while (t.length) {
            let find = false;
            for (let i = 0; i < 26; i++) {
                let curC = char(i + 97);
                if (curC < t[t.length - 1]) { // check if can find smaller char < t's last char, in the rest of S
                    if (f[i] > 0) {
                        find = true;
                        break;
                    }
                }
            }
            if (find) { // find means there is lexical smaller one, by moving much more right
                break;
            } else { // not find, current is lexical smaller
                res += t.pop();
            }
        }
    }
    return res;
};
