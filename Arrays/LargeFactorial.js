// Problem link https://www.interviewbit.com/problems/large-factorial/

class Solution {
  solve = function (A) {
    let res = new Array(500);
    res[0] = 1;
    let res_size = 1;

    for (let i = 2; i <= A; i++) {
      res_size = this.multiplyArray(i, res, res_size);
    }

    let result = "";
    for (let i = res_size - 1; i >= 0; i--) {
      result += res[i];
    }
    return result;
  };

  multiplyArray = function (x, res, res_size) {
    let carry = 0;
    for (let i = 0; i < res_size; i++) {
      let tmpRes = res[i] * x + carry;
      res[i] = tmpRes % 10;
      carry = (tmpRes / 10) | 0;  // This is to get 0.2 as 0 basically to remove the decimals
    }

    while (carry != 0) {
      res[res_size] = carry % 10;
      carry = (carry / 10) | 0;
      res_size++;
    }

    return res_size;
  };
}

let res = new Solution();
let A = 100;
console.log(res.solve(A));
