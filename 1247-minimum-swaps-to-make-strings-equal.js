/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minimumSwap = function (s1, s2) {
  let x1 = 0 // number of 'x' in s1 (skip equal chars at same index)
  let y1 = 0 // number of 'y' in s1 (skip equal chars at same index)
  let x2 = 0 // number of 'x' in s2 (skip equal chars at same index)
  let y2 = 0 // number of 'y' in s2 (skip equal chars at same index)

  for (let i = 0; i < s1.length; i++) {
    let c1 = s1.charAt(i)
    let c2 = s2.charAt(i)
    if (c1 == c2) {
      // skip chars that are equal at the same index in s1 and s2
      continue
    }
    if (c1 == 'x') {
      x1++
    } else {
      y1++
    }
    if (c2 == 'x') {
      x2++
    } else {
      y2++
    }
  } // end for

  // After skip "c1 == c2", check the number of  'x' and 'y' left in s1 and s2.
  if ((x1 + x2) % 2 != 0 || (y1 + y2) % 2 != 0) {
    return -1 // if number of 'x' or 'y' is odd, we can not make s1 equals to s2
  }

  let swaps = Math.floor(x1 / 2) + Math.floor(y1 / 2) + (x1 % 2) * 2
  // Cases to do 1 swap:
  // "xx" => x1 / 2 => how many pairs of 'x' we have ?
  // "yy" => y1 / 2 => how many pairs of 'y' we have ?
  //
  // Cases to do 2 swaps:
  // "xy" or "yx" =>  x1 % 2

  return swaps
}
