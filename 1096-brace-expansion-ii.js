/**
 * @param {string} expression
 * @return {string[]}
 */
const braceExpansionII = function (expression) {
  expression = expression.replace(/([a-z]){1}/g, '{$1}')
  const stk = new Array()
  for (let char of expression) {
    if (char !== '}') {
      stk.push(char)
    } else {
      let str = '',
        prev = '',
        temp = ''
      while (stk[stk.length - 1] != '{') {
        prev = temp
        temp = stk.pop()
        if (temp == ',' || prev == ',' || str == '') str = temp + str
        else {
          str = str
            .split(',')
            .map((item) => {
              let ar = new Array()
              for (let ch of temp.split(',')) ar.push(ch + item)
              return ar.join(',')
            })
            .join(',')
        }
      }
      stk.pop()
      while (
        stk.length > 0 &&
        stk[stk.length - 1] != ',' &&
        stk[stk.length - 1] != '{'
      ) {
        temp = stk.pop()
        str = str
          .split(',')
          .map((item) => {
            let ar = new Array()
            for (let ch of temp.split(',')) ar.push(ch + item)
            return ar.join(',')
          })
          .join(',')
      }

      if (str.length > 0) stk.push(str)
    }
  }

  return [...new Set(stk[0].split(','))].sort()
}
