// Problem link https://www.interviewbit.com/problems/valid-number/

class Solution {
  isNumber = function (A) {
    A = A.trim();
    let isDigit = /[0-9]/;
    if (A.length == 0) return 0;
    if (A.length == 1 && !isDigit.test(A)) return 0;

    if (A[0] != "." && A[0] != "-" && A[0] != "+" && !isDigit.test(A[0])) {
      return 0;
    }

    let flagDotOrE = false;

    for (let i = 1; i < A.length; i++) {
      if (
        !isDigit.test(A[i]) &&
        A[i] != "." &&
        A[i] != "-" &&
        A[i] != "+" &&
        A[i] != "e"
      ) {
        return 0;
      }

      if (A[i] == ".") {
        if (flagDotOrE) return 0;
        if (i + 1 > A.length) return 0;
        if (!isDigit.test(A[i + 1])) return 0;
      }

      if (A[i] == "e") {
        flagDotOrE = true;
        if (i + 1 > A.length) return 0;
        if (A[i + 1] == ".") return 0;
        if (!isDigit.test(A[i + 1]) && A[i + 1] != "+" && A[i + 1] != "-") {
          return 0;
        }
      }
    }
    return 1;
  };
}


let res = new Solution();
let A = "-01.1e-10"
let B = "3."
console.log(res.isNumber(A));  // 1
console.log(res.isNumber(B));  // 0



// Examples:

// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true
// Return 0 / 1 ( 0 for false, 1 for true ) for this problem

// Clarify the question using “See Expected Output”

// Is 1u ( which may be a representation for unsigned integers valid?
// For this problem, no.

// Is 0.1e10 valid?
// Yes

// -01.1e-10?
// Yes

// Hexadecimal numbers like 0xFF?
// Not for the purpose of this problem

// 3. (. not followed by a digit)?
// No

// Can exponent have decimal numbers? 3e0.1?
// Not for this problem.

// Is 1f ( floating point number with f as prefix ) valid?
// Not for this problem.

// How about 1000LL or 1000L ( C++ representation for long and long long numbers )?
// Not for this problem.

// How about integers preceded by 00 or 0? like 008?
// Yes for this problem