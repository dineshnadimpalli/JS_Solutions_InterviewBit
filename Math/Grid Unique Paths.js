// Problem link https://www.interviewbit.com/problems/grid-unique-paths/

class Solution {
  uniquePaths = function (A, B) {
    let initR = 0;
    let initC = 0;
    let maxR = A - 1;
    let maxC = B - 1;
    let count = this.findPath(initR, initC, maxR, maxC);
    return count;
  };

  findPath = function (currR, currC, endR, endC) {
    if (currR == endR && currC == endC) return 1;
    if (currR > endR || currC > endC) return 0;
    return (
      this.findPath(currR, currC + 1, endR, endC) +
      this.findPath(currR + 1, currC, endR, endC)
    );
  };
}

let res = new Solution();
let A = 2,
  B = 2;
console.log(res.uniquePaths(A, B));
