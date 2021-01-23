/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
        let cnt_people = languages.length;

  const knows = Array.from({length: cnt_people}, () => Array(n).fill(0))
        for(let who = 0; who < cnt_people; ++who) {
            for(let x of languages[who]) {
                knows[who][x-1] = true;
            }
        }
        let req = Array(n).fill(0);
        let s = new Set();
        for(let edge of friendships) {
            let a = edge[0] - 1;
            let b = edge[1] - 1;
            let yes = false;
            for(let x of languages[a]) {
                if(knows[b][x-1]) {
                    yes = true;
                }
            }
            if(yes) {
                continue;
            }
            s.add(a);
            s.add(b);
        }
        let best = Infinity;
        for(let i = 0; i < n; ++i) {
            let needed = 0;
            for(let person of s) {
                if(!knows[person][i]) {
                    needed++;
                }
            }
            best = Math.min(best, needed);
        }
        return best;    
};

