/**
 * @param {string} word
 * @return {boolean}
 */
const ac = "A".charCodeAt(0);
const zc = "Z".charCodeAt(0);
const detectCapitalUse = function(word) {
  if (allCap(word) || noCap(word) || capHead(word)) {
    return true;
  }
  return false;
};

function allCap(str) {
  let c;
  for (let i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    if (c < ac || c > zc) {
      return false;
    }
  }
  return true;
}

function noCap(str) {
  let c;
  for (let i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    if (c >= ac && c <= zc) {
      return false;
    }
  }
  return true;
}

function capHead(str) {
  let c;
  let first;
  for (let i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    if (i === 0) {
      first = c;
    } else if (c >= ac && c <= zc) {
      return false;
    }
  }
  if (first >= ac && first <= zc) {
    return true;
  } else {
    return false;
  }
}

console.log(detectCapitalUse("ffffffffffffffffffffF"));
console.log(detectCapitalUse("Leetcode"));
