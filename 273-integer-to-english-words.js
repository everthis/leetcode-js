const LESS_THAN_20 = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen"
];
const TENS = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety"
];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];
const RADIXS = [1, 10 ** 3, 10 ** 6, 10 ** 9];

/**
 * @param {number} num
 * @return {string}
 */
const numberToWords = function(num) {
  if (num === 0) {
    return "Zero";
  }

  let res = "";
  for (let i = RADIXS.length - 1; i >= 0; i--) {
    if (~~(num / RADIXS[i]) === 0) {
      continue;
    }

    res += transform(~~(num / RADIXS[i])) + THOUSANDS[i] + " ";
    num %= RADIXS[i];
  }

  return res.trim();
};

const transform = num => {
  if (num === 0) {
    return "";
  } else if (num < 20) {
    return LESS_THAN_20[num] + " ";
  } else if (num < 100) {
    return TENS[~~(num / 10)] + " " + transform(num % 10);
  } else {
    return LESS_THAN_20[~~(num / 100)] + " Hundred " + transform(num % 100);
  }
};
