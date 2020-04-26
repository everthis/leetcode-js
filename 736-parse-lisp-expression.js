/**
 * @param {string} expression
 * @return {number}
 */
const evaluate = (x) =>
  e(
    JSON.parse(
      x.replace(/[() ]|([a-z][a-z0-9]*)/g, (m) =>
        m == '(' ? '[' : m == ')' ? ']' : m == ' ' ? ',' : `"${m}"`
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
