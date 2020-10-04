// Problem link https://www.interviewbit.com/problems/maximum-ones-after-modification/

class Solution {
    solve = function(A, B){
        let wL = 0, wR = 0
        let bestL = 0, bestWindow = 0
        let zeroCount = 0;  
        while(wR<A.length){
            if (zeroCount <= B) 
            { 
                if (A[wR] == 0){
                    zeroCount++; 
                }
                wR++; 
            } 
      
      
            if (zeroCount > B) 
            { 
                if (A[wL] == 0){
                    zeroCount--; 
                }
                wL++; 
            } 
      
            if ((wR-wL > bestWindow) && (zeroCount<=B)) 
            { 
                bestWindow = wR-wL; 
                bestL = wL; 
            } 
        }
        return bestWindow
    }
}


let res = new Solution();
let A = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1]
B = 1
console.log(res.solve(A, B));   // 5

let C = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1]
D = 2
console.log(res.solve(C, D));   // 7

let E = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1]
F = 3
console.log(res.solve(E, F));   // 10