/**

You are given several logs that each log contains a unique id and timestamp.
Timestamp is a string that has the following format: Year:Month:Day:Hour:Minute:Second,
for example, 2017:01:01:23:59:59. All domains are zero-padded decimal numbers.

Design a log storage system to implement the following functions:

void Put(int id, string timestamp): Given a log's unique id and timestamp,
store the log in your storage system.

int[] Retrieve(String start, String end, String granularity): Return the id of logs whose
timestamps are within the range from start to end. Start and end all have the same format as timestamp.
However, granularity means the time level for consideration. For example, start = "2017:01:01:23:59:59",
end = "2017:01:02:23:59:59", granularity = "Day", it means that we need to find the logs within the range
from Jan. 1st 2017 to Jan. 2nd 2017.

Example 1:
put(1, "2017:01:01:23:59:59");
put(2, "2017:01:01:22:59:59");
put(3, "2016:01:01:00:00:00");
retrieve("2016:01:01:01:01:01","2017:01:01:23:00:00","Year"); // return [1,2,3], because you need to return all logs within 2016 and 2017.
retrieve("2016:01:01:01:01:01","2017:01:01:23:00:00","Hour"); // return [1,2], because you need to return all logs start from 2016:01:01:01 to 2017:01:01:23, where log 3 is left outside the range.

Note:
There will be at most 300 operations of Put or Retrieve.
Year ranges from [2000,2017]. Hour ranges from [00,23].
Output for Retrieve has no order required.

*/

const Log = function(id, timeArgs) {
  this.id = id;
  this.timeArgs = timeArgs;
};
const LogSystem = function() {
  this.logs = [];
};

/**
 * @param {number} id
 * @param {string} timestamp
 * @return {void}
 */
LogSystem.prototype.put = function(id, timestamp) {
  const args = timestamp.split(":");
  this.logs.push(new Log(id, args));
};

/**
 * @param {string} s
 * @param {string} e
 * @param {string} gra
 * @return {number[]}
 */
LogSystem.prototype.retrieve = function(s, e, gra) {
  const gransarr = ["Year", "Month", "Day", "Hour", "Minute", "Second"];
  const idx = gransarr.indexOf(gra);
  const sargs = s.split(":").slice(0, idx + 1);
  const eargs = e.split(":").slice(0, idx + 1);
  const sdate = new Date(...sargs).getTime();
  const edate = new Date(...eargs).getTime();
  const set = [];
  this.logs.forEach(function(item) {
    const itemArgs = item.timeArgs.slice(0, idx + 1);
    const itemTime = new Date(...itemArgs).getTime();
    if (itemTime >= sdate && itemTime <= edate) {
      set.push(item.id);
    }
  });
  return set;
};

/**
 * Your LogSystem object will be instantiated and called as such:
 * var obj = new LogSystem()
 * obj.put(id,timestamp)
 * var param_2 = obj.retrieve(s,e,gra)
 */
