// Problem link https://www.interviewbit.com/problems/number-of-1-bits/

// Currently the problem is not available for Javascript but the below code will work for all the test cases

class Solution {
    numSetBits = function (A){
        let count = 0; 
        while (A > 0) { 
            count += A & 1; 
            A >>= 1; 
        } 
        return count;
    }
}


let res = new Solution();

let A = 13, B = 5

console.log(res.numSetBits(A));
console.log(res.numSetBits(B));




// Java solution logic for those who want to solve it in JAVA

// public class Solution {
//     public int numSetBits(long a) {
//         int count = 0; 
//         while (a > 0) { 
//             count += a & 1; 
//             a >>= 1; 
//         } 
//         return count;
//     }
// }
