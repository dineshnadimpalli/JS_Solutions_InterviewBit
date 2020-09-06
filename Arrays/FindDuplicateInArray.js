// Problem link https://www.interviewbit.com/problems/find-duplicate-in-array/

class Solution {
    repeatedNumber = function(A){
        let hash = {}
        let duplicate = -1
        for(let i=0;i<A.length;i++){
            if(hash[A[i]]){
                duplicate = A[i]
                break
            }
            hash[A[i]] = 1
        }
        return duplicate
    }
}

let res = new Solution();
let A = [3, 4, 1, 4, 1];
console.log(res.repeatedNumber(A));
