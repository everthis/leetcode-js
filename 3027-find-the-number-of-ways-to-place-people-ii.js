/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    points.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1];
        return a[0] - b[0];
    });

    let solution = 0;
    for (let i = 0; i < points.length; i++) {
        let c = points[i];
        let currentMax = -Infinity;
        for (let j = i + 1; j < points.length; j++) {
            let t = points[j];
            if (c[1] < t[1]) continue;
            if (currentMax >= t[1]) continue;
            currentMax = Math.max(currentMax, t[1]);
            solution++;
        }
    }

    return solution;
};
