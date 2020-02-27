/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = function(S, K) {
  if (S == null || S === "") return "";
  const newStr = S.replace(/-/g, "").toUpperCase();
  const arr = newStr.split("");
  for (let i = arr.length - 1 - K; i >= 0; i -= K) {
    arr[i] = arr[i] + "-";
  }
  return arr.join("");
};
