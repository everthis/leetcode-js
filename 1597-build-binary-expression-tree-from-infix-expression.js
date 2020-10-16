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
