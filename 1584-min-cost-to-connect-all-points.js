/**
 * @param {number[][]} points
 * @return {number}
 */
const minCostConnectPoints = function(points) {
    let minIndex,minDistance=Number.MAX_SAFE_INTEGER,sum=0;
    let distanceMap={};
    let prevouslyTakenIndex = 0,taken=1,takenMap={};
    for(let i=1;i<points.length;i++){
        distanceMap[i]=Number.MAX_SAFE_INTEGER;
    }
    takenMap[prevouslyTakenIndex]=true;
    while(taken<points.length){
        minDistance=Number.MAX_SAFE_INTEGER;
        for(let i=1;i<points.length;i++){
            if(takenMap[i]!==undefined){
                continue;
            }
            let d = getDistance(prevouslyTakenIndex,i);
            distanceMap[i]=Math.min(distanceMap[i],d);
            if(distanceMap[i]<minDistance){
                minDistance = distanceMap[i];
                minIndex = i;
            }
        }
        sum+=minDistance;
        prevouslyTakenIndex = minIndex;
        takenMap[prevouslyTakenIndex]=true;
        taken++;
    }
    return sum;
    
    function getDistance(i,j){
        return Math.abs(points[i][0]-points[j][0])+Math.abs(points[i][1]-points[j][1])
    }
};
