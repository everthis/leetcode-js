/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
  const repeated = [];
  const sbStack = [];

  let mul = 0;
  let sb = "";
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (isDigit(c)) {
      if (mul === 0) sbStack.push(sb); // here is the trick
      mul = mul * 10 + +c;
    } else if (c === "[") {
      repeated.push(mul);
      mul = 0;
      sb = "";
    } else if (isLetter(c)) {
      sb += c;
    } else if (c === "]") {
      let top = sbStack.pop();
      let r = repeated.pop();
      while (r-- > 0) top += sb;
      sb = top;
    }
  }

  return sb;
};

function isDigit(c) {
  return c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57;
}

function isLetter(c) {
  return (
    (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) ||
    (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122)
  );
}
