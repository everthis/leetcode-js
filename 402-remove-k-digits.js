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
  const n = num.length, stack = []
  if(n === k) return '0'
  let i = 0
  while(i < n) {
    while(k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      k--
      stack.pop()
    }
    stack.push(num[i++])
  }
  while(k-- > 0) stack.pop()
  while(stack[0] === '0') stack.shift()
  return stack.length ? stack.join('') : '0'
};
