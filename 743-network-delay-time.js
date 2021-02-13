/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const networkDelayTime = function (times, N, K) {
  const mins = new Array(N).fill(Infinity)
  mins[K - 1] = 0
  for (let i = 0; i < N; i++) {
    for (let [u, v, t] of times) {
      if (mins[u - 1] === Infinity) continue
      if (mins[v - 1] > mins[u - 1] + t) {
        mins[v - 1] = mins[u - 1] + t
      }
    }
  }
  return mins.includes(Infinity) ? -1 : Math.max(...mins)
}

// another

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const networkDelayTime = function(times, N, K) {
    const distances = new Array(N).fill(Infinity);
    distances[K - 1] = 0;
    
    for(let i = 0 ; i < N -1 ; i++){
        let counter = 0;
        for(let j = 0 ; j < times.length ; j++){
            const source = times[j][0];
            const target = times[j][1];
            const weight = times[j][2];
            if(distances[source - 1] + weight < distances[target - 1]){
                distances[target - 1] = distances[source - 1] + weight;
                counter++
            }
        }
        if(counter === 0) break
    }
    
    const res = Math.max(...distances);
    return res === Infinity ? -1 : res;
};
