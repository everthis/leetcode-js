/**
 * @param {string} preorder
 * @return {boolean}
 */
const isValidSerialization = function(preorder) {
    const nodes = preorder.split(',')
    let diff = 1
    for(let node of nodes) {
      if(--diff < 0) return false
      if(node !== '#') diff += 2
    }
    return diff === 0
};
