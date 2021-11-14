/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @param {number[][]} requests
 * @return {boolean[]}
 */
var friendRequests = function(n, restrictions, requests) {
        function validation(arr) {
            for (const [x, y] of restrictions) {
                if (arr[x] == arr[y]) return false              
            }

            return true
        }



        let groupId = []
        for(let i = 0; i < n; i++) groupId.push(i) 


        const ans = []
        for(let [u, v] of requests) {
            if (v < u) [u, v] = [v, u]
            const tmp = groupId.slice()

            for(let i = 0; i < n; i++) {
                if (tmp[i] == groupId[v]) tmp[i] = groupId[u]              
            }

            if (validation(tmp)) {
                ans.push(true)
                groupId = tmp
            } else ans.push(false)
        }


        return ans  
};

