/**
 * @param {string} expression
 * @param {string[]} evalvars
 * @param {number[]} evalints
 * @return {string[]}
 */
const basicCalculatorIV = function (expression, evalvars, evalints) {
  // Tokenise and get list of unresolved variable names
  let [variables, it] = (function () {
    let variables = []
    let evalMap = new Map(evalvars.map((name, i) => [name, evalints[i]]))
    let tokens = expression.match(/\w+|\d+|\S/g)
    // Resolve occurrences of eval vars
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i]
      if (token[0] >= 'A') {
        let num = evalMap.get(token)
        if (num !== undefined) {
          tokens[i] = num
        } else {
          variables.push(tokens[i])
        }
      }
    }
    return [[...new Set(variables)].sort(), tokens.values()] // array & iterator
  })()
  // Map each unknown variable to a sequential ID:
  let variableMap = new Map(variables.map((name, i) => [name, i]))

  // Parse tokens into Polynomial instance, and get output in required format
  return (function parse(sign = 1) {
    function parseTerm(sign = 1) {
      let token = it.next().value
      if (token === '(') return parse(sign)
      let term = new Term(sign)
      if (typeof token === 'string' && token >= 'A') {
        term.setVar(variableMap.get(token))
      } else {
        term.setCoefficient(+token)
      }
      return new Polynomial([term])
    }

    let polynomial = new Polynomial()
    let term = parseTerm(sign)
    for (let token; (token = it.next().value) && token !== ')'; ) {
      if (token === '*') {
        term.mul(parseTerm(1))
      } else {
        polynomial.add(term)
        term = parseTerm(token === '+' ? sign : -sign)
      }
    }
    return polynomial.add(term)
  })().output(variables)
}
class Term {
  constructor(coefficient, variables = [], degree = 0) {
    this.variables = variables
    this.coefficient = coefficient
    this.degree = degree
  }
  setVar(id) {
    while (this.variables.length <= id) this.variables.push(0)
    this.variables[id]++
    this.degree++
  }
  setCoefficient(coefficient) {
    this.coefficient *= coefficient
  }
  clone() {
    return new Term(this.coefficient, [...this.variables], this.degree)
  }
  mul(term) {
    let n = term.variables.length
    while (this.variables.length < n) this.variables.push(0)
    for (let i = 0; i < n; i++) {
      this.variables[i] += term.variables[i]
    }
    this.degree += term.degree
    this.coefficient *= term.coefficient
    return this
  }
  cmp(term) {
    let diff = term.degree - this.degree
    if (diff) return Math.sign(diff)
    for (let i = 0; i < this.variables.length; i++) {
      diff = term.variables[i] - this.variables[i]
      if (diff) return Math.sign(diff)
    }
    return 0
  }
  format(variableNames) {
    return !this.coefficient
      ? ''
      : this.coefficient +
          this.variables.map((count, i) =>
            ('*' + variableNames[i]).repeat(count)
          ).join``
  }
}

class Polynomial {
  constructor(terms = []) {
    this.terms = terms
  }
  addTerm(term) {
    let terms = this.terms
    // binary search
    let low = 0
    let high = terms.length
    while (low < high) {
      let mid = (low + high) >> 1
      let diff = terms[mid].cmp(term)
      if (diff === 0) {
        terms[mid].coefficient += term.coefficient
        return this
      } else if (diff < 0) {
        low = mid + 1
      } else {
        high = mid
      }
    }
    terms.splice(low, 0, term)
    return this
  }
  add(polynomial) {
    for (let term of polynomial.terms) {
      this.addTerm(term)
    }
    return this
  }
  mul(polynomial) {
    let orig = new Polynomial(this.terms)
    this.terms = [] // clear
    for (let term1 of polynomial.terms) {
      for (let term2 of orig.terms) {
        this.addTerm(term1.clone().mul(term2))
      }
    }
    return this
  }
  output(variableNames) {
    return this.terms.map((term) => term.format(variableNames)).filter(Boolean)
  }
}
