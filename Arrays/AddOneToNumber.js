// Problem link https://www.interviewbit.com/problems/add-one-to-number/

class Solution {
  plusOne = function (A) {
    let arrCpy = [];
    let len = A.length;
    let carry = 1;
    for (let i = len - 1; i >= 0; i--) {
      arrCpy.push(A[i]);
    }
    let j = len - 1;
    while (arrCpy[j] === 0) {
      arrCpy.pop();
      j--;
    }
    len = arrCpy.length;
    if (len === 0) {
      arrCpy.push(carry);
    } else {
      for (let i = 0; i < len; i++) {
        let tmp = arrCpy[i] + carry;
        arrCpy[i] = tmp % 10;
        carry = (tmp / 10) | 0;
      }

      while (carry != 0) {
        let tmpVal = carry % 10;
        arrCpy.push(tmpVal);
        carry = (carry / 10) | 0;
      }
    }

    return arrCpy.reverse();
  };
}

let res = new Solution();
let A = [0, 0, 4, 4, 6, 0, 9, 6, 5, 1];
console.log(res.plusOne(A));
