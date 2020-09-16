// Problem link https://www.interviewbit.com/problems/roman-to-integer/

class Solution {
  romanToInt = function (A) {
    let romanKeys = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let res = 0;
    for (let i = 0; i < A.length; i++) {
      let curr = romanKeys[A[i]];

      if (i + 1 < A.length) {
        let next = romanKeys[A[i + 1]];
        if (curr >= next) {
          res += curr;
        } else {
          res += next - curr;
          i++;
        }
      } else {
        res += curr;
      }
    }

    return res;
  };
}


// Input 1:
//     A = "XIV"
// Output 1:
//     14

// Input 2:
//     A = "XX"
// Output 2:
//     20

let res = new Solution();
let A = 'XIV'
console.log(res.romanToInt(A));  // 14