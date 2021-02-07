/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
const maxValue = function(events, k) {

        cache = new Map();
        events.sort((a,b) => a[0] - b[0]);
        return dfs(events, 0, -1, k);
    
    function dfs(events, idx, end, k){
        let key = idx + "," + end + "," + k;
        if(cache.has(key)){
            return cache.get(key);
        }
        if(idx >= events.length){
            return 0;
        }
        if(k == 0) {
            return 0;
        }
        let max = 0;
        if(events[idx][0] > end){
            max = Math.max(max, dfs(events, idx+1, events[idx][1], k-1) + events[idx][2]);
        }
        
        max = Math.max(max, dfs(events, idx+1, end, k));
        cache.set(key, max);
        return max;
    }
};
