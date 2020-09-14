// Problem link https://www.interviewbit.com/problems/atoi/

class Solution {
  atoi = function (A) {
    let numArr = new Array(10).fill(0);
    let resArr = A;
    numArr = numArr.map((n, i) => `${i}`);
    let res;
    let neg = false;
    let i = 0;
    if (A[0] == "-") {
      resArr = A.slice(1);
      neg = true;
      i++;
    }
    if (A[0] == "+") {
      resArr = A.slice(1);
      i++;
    }
    if (A[0] != "-" && A[0] !== "+" && numArr[A[0]] == undefined) {
      return 0;
    }

    while (i < A.length) {
      if (numArr[A[i]] == undefined) {
        break;
      }
      i++;
    }
    res = parseInt(A.substring(0, i));
    // console.log(res)
    if (Number.isInteger(res)) {
      if (res > 0) {
        if (res > Math.pow(2, 31)) {
          return Math.pow(2, 31) - 1;
        }
      } else if (res < 0) {
        if (res < -1 * Math.pow(2, 31)) {
          return -1 * Math.pow(2, 31);
        }
      }
    } else if (!Number.isInteger(res)) {
      return 0;
    }

    return res;
  };
}


let res = new Solution();
let A = "9 2704"
let B = "+9+122"
let C = "-10+122"
console.log(res.atoi(A));
console.log(res.atoi(B));
console.log(res.atoi(C));

