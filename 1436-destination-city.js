/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function(paths) {
  const hash = {}
  for(let [s, e] of paths) {
    if(hash[e] == null) hash[e] = true
    hash[s] = false
    if(hash[s] === true) hash[s] = false
  }
  
  for(let k in hash) {
    if(hash[k]) return k
  }
};

// another

/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function(paths) {
  const set = new Set()
  for(let [s, e] of paths) set.add(e)
  for(let [s, e] of paths) set.delete(s)
  
  return set[Symbol.iterator]().next().value
};
