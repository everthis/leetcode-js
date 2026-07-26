/**
 * @param {number[][]} series1
 * @param {number[][]} series2
 * @return {number[][]}
 */
var aggregateTimeSeries = function(series1, series2) {
   const res = []

    let i = 0, j = 0
    const n = series1.length, m = series2.length
    while(i < n || j < m) {
        let t
        if(i === n) t = series2[j][0]
        else if(j === m) t = series1[i][0]
        else t = Math.min(series1[i][0], series2[j][0])

        const a  = (i < n) ? series1[i][1] : 0
        const b  = (j < m) ? series2[j][1] : 0

        res.push([t, a + b])

        if(i < n && series1[i][0] === t) i++
        if(j < m && series2[j][0] === t) j++
    }

    
    return res
};
