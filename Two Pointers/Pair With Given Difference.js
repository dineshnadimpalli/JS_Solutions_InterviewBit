// Problem link https://www.interviewbit.com/problems/pair-with-given-difference/

class Solution {
  solve = function (A, B) {
    let a = {};
    A.forEach((ele) => (a[ele] = a[ele] ? ++a[ele] : 1));

    for (let i = 0; i < A.length; i++) {
      if (B == 0 && a[A[i] + B] == 1) {
        return 0;
      } else if (a[A[i] + B]) {
        return 1;
      }
    }
    return 0;
  };

  solve1 = function (A, B) {
    let set = new Set();
    for (let x of A) {
      // if x-y = B
      // there are only 2 possibilities either x=y+B or y=x-B
      if (set.has(x - B) || set.has(x + B)) return 1;
      set.add(x);
    }
    return 0;
  };

  solve2 = function (A, B) {
    let a = new Map();
    A.forEach((ele) => {
      if (a.has(ele)) {
        a.set(ele, ++a.get(ele));
      } else {
        a.set(ele, 1);
      }
    });
    for (let i = 0; i < A.length; i++) {
      if (B == 0 && a.get(A[i] + B) == 1) {
        return 0;
      } else if (a.has(A[i] + B)) {
        return 1;
      }
    }
    return 0;
  };
}


let res = new Solution();
let A = [5, 10, 3, 2, 50, 80],
B = 78
console.log(res.solve(A, B));
console.log(res.solve1(A, B));
console.log(res.solve2(A, B));

let C = [20, 200, 500, 2000],
D = 0
console.log(res.solve(C, D));
console.log(res.solve1(C, D));
console.log(res.solve2(C, D));

let E = [-10, 20]
F = 30
console.log(res.solve(E, F));
console.log(res.solve1(E, F));
console.log(res.solve2(E, F));