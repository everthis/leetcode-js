/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = function(products, searchWord) {
  products.sort()
  let res = [], left = 0, right = products.length - 1
  for (let i = 0; i < searchWord.length; i++) {
    let c = searchWord.charAt(i), tmp = []
    while (products[left]?.charAt(i) < c) left++
    while (products[right]?.charAt(i) > c) right--
    for (let j = 0; j < 3 && left + j <= right; j++) tmp.push(products[left+j])
    res.push(tmp)
  }
  return res
};

// another

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = function(products, searchWord) {
  const res = []
  for(let i = 0, n = searchWord.length; i < n; i++) {
    const tmp = [], pre = searchWord.slice(0, i + 1)
    for(const e of products) {
      if(e.startsWith(pre)) {
        tmp.push(e)
        tmp.sort((a, b) => a.localeCompare(b))
        if(tmp.length > 3) tmp.pop()
      }
    }
    res.push(tmp)
  }
  return res
};
