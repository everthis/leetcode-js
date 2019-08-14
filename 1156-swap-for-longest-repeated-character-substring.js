/**
 * @param {string} text
 * @return {number}
 */
const maxRepOpt1 = function(text) {
  const count = [...text].reduce((a, c) => {
    a[c] = a[c] || 0;
    a[c]++;
    return a;
  }, {});
  let ans = 0;
  let i = 0;
  while (i < text.length) {
    let j = i;
    const c = text.charAt(i);
    while (j < text.length && text.charAt(j) === c) j++;
    if (j - i < count[c]) {
      let k = j + 1;
      while (k < text.length && text.charAt(k) === c && k - i < count[c]) k++;
      ans = Math.max(k - i, ans);
    } else ans = Math.max(j - i, ans);
    i = j;
  }
  return ans;
};
