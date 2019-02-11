/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

const findItinerary = tickets => {
    let db = {}; 
    let result = []; 
    tickets.forEach(node => {
        if (db[node[0]]) {
            db[node[0]].push(node[1]);
        } else {
            db[node[0]] = [node[1]];
        }
    })
    
    for(let prop in db){
        db[prop].sort();
    } 
    
    const dfs = (from) => {
        while (db[from] && db[from].length > 0) {
            dfs(db[from].shift());
        }
        result.unshift(from);
    }
    
    dfs('JFK');
    return result;
};

