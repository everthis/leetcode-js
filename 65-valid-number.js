/**
 * @param {string} str
 * @returns {boolean}
 */
const isNumber = function(str) {
  let i = 0;
  let s = str;
  // 跳过前导空格
  for (; i < s.length && " " == s[i]; ++i);
  // 处理正负号
  if ("+" == s[i] || "-" == s[i]) ++i;
  // 处理后面数字部分
  let digit = false,
    dot = false,
    exp = false;
  for (; i < s.length; ++i) {
    if ("." == s[i] && !dot)
      // '.'不能出现2次，'.'前面可以没有数字
      dot = true;
    else if ("e" == s[i] && !exp && digit) {
      // 'e'不能出现2次，'e'前面必须有数字
      // 'e'后面不能出现'.'，'e'后面必须是整数（可以是正的或负的）
      dot = exp = true;
      if (i + 1 < s.length && ("+" == s[i + 1] || "-" == s[i + 1])) ++i;
      if (i + 1 >= s.length || !(s[i + 1] >= "0" && s[i + 1] <= "9"))
        return false;
    } else if (s[i] >= "0" && s[i] <= "9") digit = true;
    else break;
  }

  // 跳过后面空格
  for (; i < s.length && " " == s[i]; ++i);

  return digit && i == s.length;
};
