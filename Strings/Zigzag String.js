// Problem link https://www.interviewbit.com/problems/zigzag-string/

class Solution {
  convert = function (A, B) {
    let i = 0;
    let step = 0;
    let flag = 0;

    let ans = "";

    if (A.length == 0 || A.length == 1 || B == 1) {
      return A;
    }

    while (step < B) {
      i = step;
      flag = 0;
      while (i < A.length) {
        if (step == 0 || step == B - 1) {
          ans = ans + A[i];
          i += 2*(B-1);
        } else {
          // If we are going down to find the next element we need to add 2*(B-1-step) to the current index
          if (flag == 0) {
            ans = ans + A[i];
            i += 2 * ((B-1) - step);
            flag = 1;
          } 
          
          // If we are going up to find the next element we need to add 2*(step) to the current index
          else {
            ans = ans + A[i];
            i += 2 * step;
            flag = 0;
          }
        }
      }
      step++;
    }
    return ans;
  };
}



let res = new Solution();
let A = "PAYPALISHIRING", B = 3
console.log(res.convert(A, B));     // PAHNAPLSIIGYIR

let C = "PAYPALISHIRING", D = 4
console.log(res.convert(C, D));     // PINALSIGYAHRPI


// for B = 3

// P       A       H       N
// A   P   L   S   I   I   G
// Y       I       R



// for B = 4

// P           I           N
// A       L   S       I   G
// Y   A       H   R
// P           I