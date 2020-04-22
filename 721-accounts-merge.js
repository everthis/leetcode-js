/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function (accounts) {
  const roots = new Set()
  const owner = {}
  const parent = {}
  const children = {}

  for (let account of accounts) {
    let [user, root, ...emails] = account
    let r1 = find(root)
    owner[root] = user
    children[r1] = children[r1] || [root]
    roots.add(r1)

    for (let email of emails) {
      let r2 = find(email)
      if (r2 !== r1) {
        parent[r2] = r1
        children[r1].push(...(children[r2] ? children[r2] : [email]))
        roots.delete(r2)
        delete children[r2]
      }
    }
  }

  return [...roots].map((r) => [owner[r], ...children[r].sort()])

  function find(a) {
    parent[a] = parent[a] || a
    return a === parent[a] ? a : find(parent[a])
  }
}
