/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const isRationalEqual = function (S, T) {
  return f(S) === f(T)
}

function f(S) {
  let i = S.indexOf('(')
  if (i > 0) {
    let base = S.slice(0, i)
    let rep = S.slice(i + 1, S.length - 1)
    for (let j = 0; j < 20; ++j) base += rep
    return +base
  }
  return +S
}
