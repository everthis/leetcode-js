/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
const findAllPeople = function(n, meetings, firstPerson) {
  meetings.sort((a, b) => a[2] - b[2])
  const shared = new Set([0, firstPerson])
  
  let start = new Set(), links = {}
  for(let i = 0, len = meetings.length; i < len; i++) {
    const [x,y,t] = meetings[i]
    if(i > 0 && t !== meetings[i - 1][2]) {
      dfs(start, links, shared)
      start = new Set()
      links = {}
    }
    if(shared.has(x)) start.add(x)
    if(shared.has(y)) start.add(y)
    if(links[x] == null) links[x] = []
    if(links[y] == null) links[y] = []
    links[x].push(y)
    links[y].push(x)
  }
  
  
  dfs(start, links, shared)
  return Array.from(shared)
  
  function dfs(start, links, shared) {
    const visited = new Set()
    while(start.size) {
      const it = start[Symbol.iterator]()
      const cur = it.next().value
      start.delete(cur)
      visited.add(cur)
      shared.add(cur)
      for(let e of (links[cur] || [])) {
        if(!visited.has(e)) start.add(e)
      }
    }
  }
};

    
