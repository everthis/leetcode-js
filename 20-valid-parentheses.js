/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const openBrackets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];
  const oArr = [];
  let char = "";
  let cidx = 0;
  let oidx = 0;
  for (let i = 0; i < s.length; i++) {
    char = s.charAt(i);
    if (closeBrackets.indexOf(char) !== -1) {
      cidx = closeBrackets.indexOf(char);
      lastOpenBracket = oArr[oArr.length - 1];
      oidx = openBrackets.indexOf(lastOpenBracket);
      if (cidx === oidx) {
        oArr.pop();
      } else {
        return false;
      }
    } else {
      oArr.push(char);
    }
  }
  return oArr.length > 0 ? false : true;
};
