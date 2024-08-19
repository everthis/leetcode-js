/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var timeTaken = function(edges) {
    let n = edges.length + 1;
    let adj = Array.from({ length: n }, () => []);
    for (let edge of edges) {
        adj[edge[0]].push(edge[1]);
        adj[edge[1]].push(edge[0]);
    }

    // first, use 0 as root and calculate below:
    // far1[i]: the farthest children for the subtree with root i
    // far2[i]: the second farthest children for the subtree with root i
    let far1 = Array(n).fill(0);
    let far2 = Array(n).fill(0);
    buildFar(0, adj, far1, far2);

    // by far1 and far2, we can use re-rooting to help us find the answer
    let ans = Array(n).fill(0);
    calcOthers(0, 0, adj, far1, far2, ans);

    return ans;
};

function buildFar(curr, adj, far1, far2) {
    let maxChild1 = 0, maxChild2 = 0;
    // Iterate through each child (branch), and find the two farthest children.
    for (let child of adj[curr]) {
        if (child <= curr) continue;

        buildFar(child, adj, far1, far2);
        let dist = ((child & 1) ? 1 : 2) + far1[child];
        if (dist >= maxChild1) {
            maxChild2 = maxChild1;
            maxChild1 = dist;
        } else if (dist > maxChild2) {
            maxChild2 = dist;
        }
    }

    far1[curr] = maxChild1;
    far2[curr] = maxChild2;
}

function calcOthers(curr, parentDist, adj, far1, far2, ans) {
    // parentDist: the farthest distance when node[parent] is the root

    ans[curr] = Math.max(parentDist, far1[curr]);

    for (let child of adj[curr]) {
        if (child < curr) continue;

        let toParent = (curr & 1) ? 1 : 2;
        let toChild = (child & 1) ? 1 : 2;
        // For this child, exclude itself or it is not correct
        // (If the branch containing this child is the farthest for node curr, we should use the second farthest)
        let farthestChildExceptThisChild = (far1[curr] === (toChild + far1[child])) ? far2[curr] : far1[curr];

        calcOthers(child, toParent + Math.max(parentDist, farthestChildExceptThisChild), adj, far1, far2, ans);
    }
}



