// Problem link https://www.interviewbit.com/problems/all-factors/

class Solution {
    allFactors = function(A){
        let res = []
        let res2 = []
        for(let i=1;i<=Math.sqrt(A);i++){
            if(A%i==0){
                res.push(i)
                if(i!=Math.sqrt(A)){
                    res2.unshift(A/i)
                }
            }
        }
        return res.concat(res2)
    }
}

let res = new Solution();
let A = 36;
console.log(res.allFactors(A));
