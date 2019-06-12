/**
 * @param {string} formula
 * @return {string}
 */
function countOfAtoms(formula) {
  let [dic, coeff, stack, elem, cnt, j, res] = [{}, 1, [], '', 0, 0, '']
  for (let i = formula.length - 1; i >= 0; i--) {
    if (!isNaN(formula[i] * 1)) {
      ;(cnt += Number(formula[i]) * 10 ** j), (j += 1)
    } else if (formula[i] == ')') {
      stack.push(cnt), (coeff *= cnt), (j = cnt = 0)
    } else if (formula[i] == '(') {
      ;(coeff = Math.floor(coeff / stack.pop())), (j = cnt = 0)
    } else if (formula[i] == formula[i].toUpperCase()) {
      elem += formula[i]
      elem = elem
        .split('')
        .reverse()
        .join('')
      dic[elem] = dic[elem] || 0
      dic[elem] += (cnt || 1) * coeff
      ;(elem = ''), (j = cnt = 0)
    } else {
      elem += formula[i]
    }
  }
  Object.keys(dic)
    .sort()
    .forEach(function(c) {
      res += dic[c] > 1 ? c + String(dic[c]) : c
    })
  return res
}
