/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function(num, k) {
  const digits = num.length - k;
  const stk = new Array(num.length);
  let top = 0;
  // k keeps track of how many characters we can remove
  // if the previous character in stk is larger than the current one
  // then removing it will get a smaller number
  // but we can only do so when k is larger than 0
  for (let i = 0; i < num.length; i++) {
    let c = num.charAt(i);
    while (top > 0 && stk[top - 1] > c && k > 0) {
      top -= 1;
      k -= 1;
    }
    stk[top++] = c;
  }
  // find the index of first non-zero digit
  let idx = 0;
  while (idx < digits && stk[idx] === "0") idx++;
  return idx === digits ? "0" : stk.slice(idx, digits + idx).join("");
};


// another

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function(num, k) {
  const len = num.length
  if(k === len) return '0'
  const stack = []
  let i = 0
  while(i < len) {
    while(k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop()
      k--
    }
    stack.push(num[i])
    i++
  }
  while(k > 0) {
    stack.pop()
    k--
  }
  let res = ''
  while(stack.length) res += stack.pop()
  res = res.split('').reverse()
  while(res.length > 1 && res[0] === '0') res.shift()
  return res.join('')
};
