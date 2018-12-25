/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const possibleBipartition = function(N, dislikes) {
    const graph = []
    for(let i = 0; i <= N; i++) {
        graph[i] = []
    }
    for(let el of dislikes) {
        graph[el[0]].push(el[1])
        graph[el[1]].push(el[0])
    }
    const color = new Array(N+1).fill(0)
    for (let i = 1; i <= N; i++) {
        if (color[i] == 0) {
            color[i] = 1;
            const q = [];
            q.push(i);
            while (q.length > 0) {
                let cur = q.shift();
                for (let j of graph[cur]) {
                    if (color[j] == 0) {
                        color[j] = color[cur] == 1 ? 2 : 1;
                        q.push(j);
                    } else {
                        if (color[j] == color[cur]) return false;
                    }
                }
            }
        }
    }
    return true
};
