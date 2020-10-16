/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {Node}
 */
const expTree = function (s) {
  const n = s.length
  const head = new Node()
  let i = 0
  const number = () => {
    let num = ''
    while (i < n && '0' <= s[i]) {
      num += s[i++]
    }
    return new Node(Number(num))
  }
  const factor = () => {
    if (s[i] === '(') {
      i++
      const node = expression()
      i++
      return node
    }
    return number()
  }
  const term = () => {
    let left = factor()
    while (i < n && (s[i] === '*' || s[i] === '/')) {
      const op = new Node(s[i++])
      const right = factor()
      op.left = left
      op.right = right
      left = op
    }
    return left
  }
  const expression = () => {
    let left = term()
    while (i < s.length && (s[i] === '+' || s[i] === '-')) {
      const op = new Node(s[i++])
      const right = term()
      op.left = left
      op.right = right
      left = op
    }
    return left
  }
  return expression()
}


// another

/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {Node}
 */
const expTree = function(s) {
  const list = s.split('')
  const mdSet = new Set(['*', '/'])
  const amSet = new Set(['+', '-'])
  return parseExpression(list)
  
  function parseExpression(tokens) {
    let lhs = parseTerm(tokens)
    while(tokens.length && amSet.has(tokens[0])) {
      const op = tokens.shift()
      const rhs = parseTerm(tokens)
      lhs = new Node(op, lhs, rhs)
    }
    return lhs
  }
  function parseTerm(tokens) {
    let lhs = parseFactor(tokens)
    while(tokens.length && mdSet.has(tokens[0])) {
      const op = tokens.shift()
      const rhs = parseFactor(tokens)
      lhs = new Node(op, lhs, rhs)
    }
    return lhs
  }
  function parseFactor(tokens) {
    if(tokens[0] === '(') {
      tokens.shift()
      const node = parseExpression(tokens)
      tokens.shift()
      return node
    } else {
      const token = tokens.shift()
      return new Node(token)
    } 
  }
};
