/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
  let count = 0;

  if (s == null || s.length === 0) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    extendPalindrome(s, i, i);
    extendPalindrome(s, i, i + 1);
  }

  function extendPalindrome(str, left, right) {
    while (
      left >= 0 &&
      right < s.length &&
      s.charAt(left) === s.charAt(right)
    ) {
      count++;
      left--;
      right++;
    }
  }
  return count;
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));

// another

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
  const arr = manachers(s)
  return arr.map(e => ~~((e + 1) / 2)).reduce((ac, e) => ac + e, 0)
};

function manachers(s) {
  const str = `@#${s.split('').join('#')}#$`
  const arr = Array(str.length).fill(0)
  
  let center = right = 0
  for(let i = 1, n = str.length; i < n - 1; i++) {
    if(i < right) {
      arr[i] = Math.min(right - i, arr[2 * center - i])
    }
    while(str[i + arr[i] + 1] === str[i - arr[i] - 1]) {
      arr[i] += 1
    }
    if(i + arr[i] > right) {
      center = i
      right = i + arr[i]
    }
  }
  
  return arr
}
