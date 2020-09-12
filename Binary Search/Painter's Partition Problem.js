// Problem link https://www.interviewbit.com/problems/painters-partition-problem/

class Solution {
  paint = function (A, B, C) {
    let low = Math.max(...C);
    let high = C.reduce((acc, curr) => acc + curr);
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      let reqPainters = this.findPainters(C, mid);
      if (reqPainters <= A) {
        high = mid;
      } else {
        // here mid is excluded because it gives reqPainters>A
        low = mid + 1;
      }
    }
    return ((low % 10000003) * (B % 10000003)) % 10000003;
  };

  findPainters = function (arr, k) {
    let painters = 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum > k) {
        sum = arr[i];
        painters++;
      }
    }
    return painters;
  };
}

let res = new Solution();
let A = 10,
  B = 1,
  C = [1, 8, 11, 3];
console.log(res.paint(A, B, C));
