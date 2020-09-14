// Problem link https://www.interviewbit.com/problems/count-and-say/

class Solution {
  countAndSay = function (A) {
    let arr = new Array(A + 1);
    arr[0] = "1";
    if (A == 0) return 1;
    let x;
    for (let x = 1; x <= A; x++) {
      let i = 0,
        j = 0;
      let len = arr[x - 1].length;
      let diff = 0;
      arr[x] = "";
      while (i < len && j < len) {
        if (arr[x - 1][i] === arr[x - 1][j]) {
          j++;
        } else {
          diff = j - i;
          // console.log(i, j, diff, `${diff}${arr[x-1][i]}`)
          arr[x] += `${diff}${arr[x - 1][i]}`;
          i = j;
        }
      }
      if (j >= len) {
        diff = j - i;
        // console.log(i, j, diff, `${diff}${arr[x-1][i]}`)
        arr[x] += `${diff}${arr[x - 1][i]}`;
      }
      // console.log(i,j)
    }
    // console.log(arr)
    return arr[A - 1];
  };
}

// Sequence is like 1, 11, 21, 1211, 111221, ...

let res = new Solution();
let A = 3
let B = 6
console.log(res.countAndSay(A));
console.log(res.countAndSay(B));

