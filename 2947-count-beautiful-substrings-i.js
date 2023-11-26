/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
        let counter=0;
        for(let i=0;i<s.length;i++){
            let vow=0;
            let con=0;
            for(let j=i;j<s.length;j++){
                let c=s.charAt(j);
                if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u'){
                    vow++;
                }
                let df=j-i;
                df++;
                con=df;
                con=con-vow;

                if(vow==con &&(vow*con)%k==0){
                    counter++;
                }
            }
        }
        return counter;
};
