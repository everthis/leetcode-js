let cnt = {}, freq = {} 
var FrequencyTracker = function() {
    cnt = {}
    freq = {}
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
    const c = cnt[number] ?? 0
    if(cnt[number] == null) cnt[number] = 0
    if(freq[c] == null) freq[c] = 0
    --freq[cnt[number]];
    if(cnt[number] == null)  cnt[number] = 0
    ++cnt[number];
    if(freq[cnt[number]] == null) freq[cnt[number]] = 0
    ++freq[cnt[number]];
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
        if(cnt[number] == null) cnt[number] = 0
        if (cnt[number] > 0) {
            if(freq[cnt[number]] == null) freq[cnt[number]] = 0
            --freq[cnt[number]];
            --cnt[number];
            if(freq[cnt[number]] == null) freq[cnt[number]] = 0
            ++freq[cnt[number]];
        }
};

/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
   return freq[frequency] > 0;
};

/** 
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
