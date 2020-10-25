// Problem link https://www.interviewbit.com/problems/redundant-braces/

class Solution {
  braces = function (A) {
    let st = [];
    let ops = ["+", "-", "*", "/"];
    for (let i = 0; i < A.length; i++) {
      if (A[i] == ")") {
        let top = st.pop();
        let flag = true;
        while (top != "(") {
          if (ops.indexOf(top) != -1) {
            flag = false;
          }
          top = st.pop();
        }

        if (flag) {
          return 1;
        }
      } else {
        st.push(A[i]);
      }
    }

    return 0;
  };
}


