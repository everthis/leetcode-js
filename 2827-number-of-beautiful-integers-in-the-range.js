/**
 * @param {number} low
 * @param {number} high
 * @param {number} k
 * @return {number}
 */
const numberOfBeautifulIntegers = function (low, high, k) {
  const memo = new Map();

  function dp(index, diff, isLimit, isZero, numStr, m) {
    if (index === numStr.length) {
      return Number(isZero) & (diff === 0) & (m === 0);
    }

    const memoKey = `${index}-${diff}-${isLimit ? 1 : 0}-${isZero ? 1 : 0}-${numStr}-${m}`;
    if (memo.has(memoKey)) {
      return memo.get(memoKey);
    }

    let res = 0;
    if (!isZero) {
      res = dp(index + 1, diff, false, false, numStr, m);
    }
    const bound = isLimit ? parseInt(numStr[index]) : 9;

    for (let d = 1 - Number(isZero); d <= bound; d++) {
      if (d % 2 === 1) {
        res += dp(
          index + 1,
          diff + 1,
          isLimit && d === bound,
          true,
          numStr,
          (m + d * Math.pow(10, numStr.length - index - 1)) % k
        );
      } else {
        res += dp(
          index + 1,
          diff - 1,
          isLimit && d === bound,
          true,
          numStr,
          (m + d * Math.pow(10, numStr.length - index - 1)) % k
        );
      }
    }

    memo.set(memoKey, res);
    return res;
  }

  return dp(0, 0, true, false, String(high), 0) - dp(0, 0, true, false, String(low - 1), 0);
}

