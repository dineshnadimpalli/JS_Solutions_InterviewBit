// Problem link https://www.interviewbit.com/problems/is-rectangle/

class Solution {
  solve = function (A, B, C, D) {
    let res = {};
    let arr = [A, B, C, D];
    arr.forEach((d) => {
      if (res[d]) {
        res[d] = ++res[d];
      } else {
        res[d] = 1;
      }
    });
    res = Object.values(res);
    for (let i = 0; i < res.length; i++) {
      if (res[i] !== 2) {
        return 0;
      }
    }
    return 1;
  };
}

let res = new Solution();
let A = 1,
  B = 1,
  C = 2,
  D = 2;

let X = 1,
  Y = 2,
  Z = 3,
  W = 4;

console.log(res.solve(A, B, C, D));
console.log(res.solve(X, Y, Z, W));

