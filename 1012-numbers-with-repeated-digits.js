/**
 * @param {number} n
 * @return {number}
 */
function numDupDigitsAtMostN(n) {
  let numNoDupDigits = 0; // the number of positive integers less than or equal to n with no repeated digits

  let lst = Array.from(String(n), Number);
  let n_digits = lst.length;

  // if n = 8765, lst = [8,7,6,5],
  // the number without repeated digit can the the following format:
  // XXX
  // XX
  // X
  for (let i = 1; i < n_digits; i++) {
    // the number of i digits without repeated digit
    // the leading digit cannot be 0
    numNoDupDigits += 9 * perm(9, i - 1);
  }

  // and
  // 1XXX ~ 7XXX
  // 80XX ~ 86XX
  // 870X ~ 875X
  // 8760 ~ 8764
  let seen = new Set();
  for (let i = 0; i < lst.length; i++) {
    let x = lst[i];
    for (let y = (i === 0 ? 1 : 0); y < x; y++) {
      if (!seen.has(y)) {
        // the leading digit used - y
        // for the remaining positions we cannot use digits in set seen and y
        numNoDupDigits += perm(9 - i, n_digits - i - 1);
      }
    }
    if (seen.has(x)) {
      break;
    }
    seen.add(x);
  }

  // and
  // 8765
  if (n_digits === new Set(lst).size) {
    numNoDupDigits += 1;
  }

  return n - numNoDupDigits;
}

function perm(m, n) {
  let res = 1
  for(let i = 0; i < n; i++) {
    res *= m
    m--
  }

  return res
}

// another


/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function(n) {
  const digits = [], {floor} = Math
  let tmp = n + 1
  while(tmp) {
    digits.push(tmp % 10)
    tmp = floor(tmp / 10)
  }
  let res = 0
  const len = digits.length
  let cur = 9
  for(let i = 0; i < len - 1; i++) {
    res += cur
    cur *= (9 - i)
  }
  cur = floor(cur / 9)
  const seen = Array(10).fill(false)
  for(let i = 0; i < len; i++) {
    const d = digits[len - i - 1]
    for(let j = (i === 0 ? 1 : 0); j < d; j++) {
      if(!seen[j]) res += cur
    }
    cur = floor(cur / (9 - i))
    if(seen[d]) break
    seen[d] = true
  }

  return n - res
};
