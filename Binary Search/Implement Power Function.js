// Problem link https://www.interviewbit.com/problems/implement-power-function/

// Currently the problem is not available for Javascript but the below code will work for all the test cases

class Solution {
  pow = function (x, n, d) {
    if (x == 0) return 0;
    if (n == 0) return 1 % d;
    let res = 1;
    let base = x % d;
    while (n > 0) {
      if (n % 2 == 1) {
        res = (res * base) % d;
        n--;
      } else {
        base = (base * base) % d;
        n = n / 2;
      }
    }
    // finding modulus value for negative results 
    if (res < 0) {
      return (res + d) % d;
    } else {
      return res;
    }
  };
}

let res = new Solution();
// let A = 71045970,
//   B = 41535484,
//   C = 64735492;
// result should be 20805472

let A = -3,
  B = 5,
  C = 89;  
// result should be 24

console.log(res.pow(A, B, C));



// Java solution logic for those who want to solve it in JAVA

// Note: The below code logic doesn't work for JS due to some overflow

// public class Solution {
//     public int pow(int x, int n, int d) {
//         if(x==0)    return 0;
//         if(n==0)    return 1;
//         long tmp = pow(x, n/2, d)%d;
//         long res;
//         if(n%2==0){
//             res = (tmp * tmp)%d;
//         }else{
//             res = ((x%d * tmp)%d * tmp)%d;
//         }
//         if(res<0){
//             return (int)(res+d)%d;
//         }else{
//             return (int)res%d;
//         }
//     }
// }