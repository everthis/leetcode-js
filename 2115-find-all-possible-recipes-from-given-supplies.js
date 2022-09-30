/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
const findAllRecipes = function(recipes, ingredients, supplies) {
  const set = new Set(supplies), res = [], graph = {}, n = recipes.length
  const inDegree = {}
  for(let x of recipes) inDegree[x] = 0
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < ingredients[i].length; j++) {
      const ing = ingredients[i][j]
      if(!set.has(ing)) {
        if (graph[ing] == null) graph[ing] = []
        graph[ing].push(recipes[i])
        inDegree[recipes[i]]++
      }
    }
  }
  // Kahn's Algorithm
  const q = []
  for(let x in inDegree) {
    if (inDegree[x] === 0) q.push(x)
  }
  while(q.length) {
    const len = q.length
    for(let i = 0; i < len; i++) {
      const cur = q.pop()
      res.push(cur)
      for(let next of (graph[cur] || [])) {
        inDegree[next]--
        if(inDegree[next] === 0) {
          q.push(next)
        }
      }
    }
  }
  return res
};

// another

/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
const findAllRecipes = function(recipes, ingredients, supplies) {
  const graph = {}
  const n = recipes.length

  const inDegree = {}
  supplies = new Set(supplies)
  for(const e of recipes) inDegree[e] = 0

  let q = []
  for(let i = 0; i < n; i++) {
    const rec = recipes[i]
    for(let e of ingredients[i]) {
      if(!supplies.has(e)) {
        if(graph[e] == null) graph[e] = []
        graph[e].push(rec)
        inDegree[rec]++
      }
    }
  }
  // console.log(inDegree)
  for(let i = 0; i < n; i++) {
    if(inDegree[recipes[i]] === 0) {
      q.push(recipes[i])
    }
  }
  
  // console.log(q)
  const res = []  
  while(q.length) {
    const size = q.length
    const nxt = []
    
    for(let i = 0; i < size; i++) {
      const cur = q[i]
      res.push(cur)
      for(const e of (graph[cur] || [])) {
        inDegree[e]--
        if(inDegree[e] === 0) nxt.push(e)
      }
    }
    
    q = nxt
  }

  return res
};
