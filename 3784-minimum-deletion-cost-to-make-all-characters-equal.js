/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
  const mp = {}
    let allCost = 0
    for(let i = 0; i < cost.length; i++) {
        if(mp[s[i]] == null) mp[s[i]] = 0
        mp[s[i]] += cost[i]
        allCost += cost[i]
    }
    let maxCost = 0
    for(const k of Object.keys(mp)) {
      maxCost = Math.max(maxCost, mp[k])      
    }
    return allCost - maxCost
};
