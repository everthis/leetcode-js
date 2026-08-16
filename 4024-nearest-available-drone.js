/**
 * @param {number[][]} drones
 * @param {number[]} target
 * @return {number}
 */
var nearestDrone = function(drones, target) {
    const n = drones.length
    const arr = drones
    const {abs} = Math
    const dis = []
    const [tx,ty] = target
    let minDis = Infinity
    for(const [x, y, d] of arr) {
        const tmp = abs(x - tx) + abs(y - ty)
        if(d - tmp >= 0) {
            dis.push(tmp)
            minDis = Math.min(minDis, tmp)
        } else dis.push(-1)
    }

    if(minDis === Infinity) return -1

    // console.log(dis, minDis)
    for(let i = 0; i < n; i++) {
        if(dis[i] === minDis) return i
    }
};
