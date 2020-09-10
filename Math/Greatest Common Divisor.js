// Problem link https://www.interviewbit.com/problems/greatest-common-divisor/

class Solution {
  gcd = function (A, B) {
    if (A == 0) return B;
    return this.gcd(B % A, A);
  };

  lcm = function (A, B){
      let larger = Math.max(A, B)
      let smaller = Math.min(A, B)
      for(let i=larger; ;i+=larger){
          if(i%smaller===0) return i
      }
  }
}

// Note: lcm * gcd = A * B

let res = new Solution();
let A = 6,
  B = 9;
console.log(res.gcd(A, B));
console.log(res.lcm(A, B));

