// Problem link https://www.interviewbit.com/problems/max-continuous-series-of-1s/

class Solution {
    maxone = function(A, B){
        let len = A.length
        // initialize window left and window right
        let wL = 0, wR = 0;  
      
        // Left index and size of the widest window  
        let bestL = 0, bestWindow = 0;  
      
        // Count of zeroes in current window 
        let zeroCount = 0;  
      
        // While right boundary of current window doesn't cross  
        // right end 
        while (wR < A.length) 
        { 
            // If zero count of current window is less than m, 
            // widen the window toward right 
            if (zeroCount <= B) 
            { 
                if (A[wR] == 0) 
                zeroCount++; 
                wR++; 
            } 
      
            // If zero count of current window is more than m, 
            // reduce the window from left 
            if (zeroCount > B) 
            { 
                if (A[wL] == 0) 
                zeroCount--; 
                wL++; 
            } 
      
            // Update widest window if this window size is more 
            if ((wR-wL > bestWindow) && (zeroCount<=B)) 
            { 
                bestWindow = wR-wL; 
                bestL = wL; 
            } 
        }
        
        return new Array(bestWindow).fill(0).map((a, i)=>i+bestL)
    }
}


let res = new Solution();
let A = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1]
B = 1
console.log(res.maxone(A, B));   // [ 0, 1, 2, 3, 4 ]

let C = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1]
D = 2
console.log(res.maxone(C, D));   // [3, 4, 5, 6, 7, 8, 9]

let E = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1]
F = 3
console.log(res.maxone(E, F));   // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]