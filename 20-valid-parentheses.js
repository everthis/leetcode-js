/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {
  const stack = []
  for(let c of s) {
    if(c === '(') stack.push(')')
    else if(c === '{') stack.push('}')
    else if(c === '[') stack.push(']')
    else if(stack.length === 0 || c !== stack.pop()) return false
  }
  return stack.length === 0
};


// another

/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {
  const stack = []
  const n = s.length
  for(let c of s) {
    if(c === '(' || c === '{' || c === '[') stack.push(c)
    else if(c === ')') {
      if(stack[stack.length - 1] === '(') stack.pop()
      else return false
    }
    else if(c === '}') {
      if(stack[stack.length - 1] === '{') stack.pop()
      else return false
    }
    else if(c === ']') {
      if(stack[stack.length - 1] === '[') stack.pop()
      else return false
    }
  }
  return stack.length === 0
};

// another

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
