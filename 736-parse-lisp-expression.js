/**
 * @param {string} expression
 * @return {number}
 */
const evaluate = (x) =>
  e(
    JSON.parse(
      x.replace(/[() ]|([a-z][a-z0-9]*)/g, (m) =>
        m === '(' ? '[' : m === ')' ? ']' : m === ' ' ? ',' : `"${m}"`
      )
    )
  )
const e = (x, v = []) =>
  ({
    string: () => v.find((y) => y[0] === x)[1],
    number: () => x,
    object: () =>
      ({
        add: () => e(x[1], v) + e(x[2], v),
        mult: () => e(x[1], v) * e(x[2], v),
        let: () =>
          e(
            x[x.length - 1],
            x
              .slice(1, -1)
              .reduce(
                ({ v, t }, z) =>
                  t ? { v: [[t, e(z, v)], ...v] } : { v, t: z },
                { v }
              ).v
          ),
      }[x[0]]()),
  }[typeof x]())

// another

/**
 * @param {string} expression
 * @return {number}
 */
const evaluate = function (expression) {
  const tokens = tokenizer(expression)
  let i = 0
  function exec(scope) {
    let value = null
    const next = tokens[i++]
    if (next === '(') {
      scope = enter(scope)
      switch (tokens[i++]) {
        case 'add':
          const a = exec(scope)
          const b = exec(scope)
          value = a + b
          break
        case 'mult':
          const x = exec(scope)
          const y = exec(scope)
          value = x * y
          break
        case 'let':
          while (tokens[i] !== '(' && tokens[i + 1] !== ')') {
            scope.variables[tokens[i++]] = exec(scope)
          }
          value = exec(scope)
          break
      }
      scope = exit(scope)
      i++
    } else if (isNumber(next)) {
      value = Number(next)
    } else {
      // Find variable in current scope otherwise go to parent
      let t = scope
      while (t) {
        if (next in t.variables) {
          value = t.variables[next]
          break
        }
        t = t.parent
      }
    }
    return value
  }
  return exec(newScope())
}
function tokenizer(expression) {
  const tokens = []
  let token = ''
  for (const c of expression) {
    if (c === '(' || c === ')') {
      if (token) tokens.push(token)
      tokens.push(c)
      token = ''
    } else if (c === ' ') {
      if (token) tokens.push(token)
      token = ''
    } else {
      token += c
    }
  }
  if (token) {
    tokens.push(token)
  }
  return tokens
}
function isNumber(n) {
  return !isNaN(n)
}
function newScope() {
  return { parent: null, variables: {} }
}
function enter(scope) {
  const next = newScope()
  next.parent = scope
  return next
}
function exit(scope) {
  return scope.parent
}
