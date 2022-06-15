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
