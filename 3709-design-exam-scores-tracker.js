var ExamTracker = function() {
  this.time = []
  this.score = []
};

/** 
 * @param {number} time 
 * @param {number} score
 * @return {void}
 */
ExamTracker.prototype.record = function(time, score) {
  this.time.push(time)
  this.score.push(this.score.length ? this.score[this.score.length - 1] + score : score)
  // console.log(this.score)
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
ExamTracker.prototype.totalScore = function(startTime, endTime) {
  const pre = bs(this.time, startTime - 1), cur = bs(this.time, endTime)
  if(cur === -1) return 0
  return this.score[cur] - (pre === -1 ? 0 : this.score[pre])  
};
// <=
function bs(arr, time) {
  let l = -1, r = arr.length - 1
  while(l < r) {
    const mid = r - Math.floor((r - l) / 2)
    if(arr[mid] <= time) {
      l = mid
    } else r = mid - 1
  }
  return l
}

/** 
 * Your ExamTracker object will be instantiated and called as such:
 * var obj = new ExamTracker()
 * obj.record(time,score)
 * var param_2 = obj.totalScore(startTime,endTime)
 */
