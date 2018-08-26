/**
 * @param {string[]} words
 * @param {number} L
 * @returns {string[]}
 */
const fullJustify = function(words, L) {
  const res = [""];
  if (words.length === 0 || L === 0) {
    return res;
  } else {
    res.shift();
    for (let i = 0, k, l; i < words.length; i += k) {
      for (
        k = l = 0;
        i + k < words.length && l + words[i + k].length <= L - k;
        k++
      ) {
        l += words[i + k].length;
      }
      let tmp = words[i];
      for (j = 0; j < k - 1; j++) {
        if (i + k >= words.length) {
          tmp += " ";
        } else {
          // for (i = 0; i < ((L - l) / (k - 1) + (j < (L - l) % (k - 1))) - 1; i++) {
          //     tmp += ' ';
          // }
          tmp += Array(
            parseInt((L - l) / (k - 1) + (j < (L - l) % (k - 1))) + 1
          ).join(" ");
        }
        // tmp += (L - l) / (k - 1) + (j < (L - l) % (k - 1)) + ' ';
        tmp += words[i + j + 1];
      }
      // for (i = 0; i < (L - tmp.length); i++) {
      //     tmp += ' '
      // }
      tmp += Array(parseInt(L - tmp.length) + 1).join(" ");
      // tmp += L - tmp.length + ' ';
      res.push(tmp);
    }
    return res;
  }
};
