/**
 * @param {string} date
 * @return {string}
 */
const reformatDate = function(date) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const map = new Map();
  for (let i = 0; i < months.length; ++i) {
    map.set(months[i], (i + 1 < 10 ? "0" : "") + (i+1));    
  }
  const parts = date.split(" "); 
  const day = (parts[0].length == 3 ? "0" : "") + parts[0].slice(0, parts[0].length - 2);
  return parts[2] + "-" + map.get(parts[1]) + "-" + day;  
};
