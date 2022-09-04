/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    const count = new Array(n).fill(0);
    const freeTime = new Array(n).fill(0);
    meetings.sort((a, b) => a[0] - b[0]);
    for(let i = 0 ; i < meetings.length ; i++){
        let minRoom = -1;
        let minTime = Number.MAX_SAFE_INTEGER;
        for(let j = 0 ; j < n ; j++){
            if(freeTime[j] <= meetings[i][0]){
                count[j]++;
                freeTime[j] = meetings[i][1];
                minRoom = -1;
                break;
            }
            if(freeTime[j] < minTime){
                minTime = freeTime[j];
                minRoom = j;
            }
        }
        if(minRoom !== -1){
            count[minRoom]++;
            freeTime[minRoom] += meetings[i][1] - meetings[i][0]; 
        }
    }
    
    let ans = 0;
    let maxCount = count[0];
    for(let i = 1 ; i < n ; i++){
        if(count[i] > maxCount){ 
            ans = i;
            maxCount = count[i];
        }
    }
    return ans;  
};
