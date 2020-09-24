// Problem link https://www.interviewbit.com/problems/pretty-json/

class Solution {
  prettyJSON = function (A) {
    let spaces = [];
    let output = [];
    let temp = "";

    for (let i = 0; i < A.length; i++) {
      switch (A[i]) {
        case "{":
        case "[":
          if (temp != "") {
            output.push(spaces.join("") + temp);
          }
          output.push(spaces.join("") + A[i]);
          temp = "";
          spaces.push("\t");
          break;
        case "}":
        case "]":
          if (temp != "") {
            output.push(spaces.join("") + temp);
          }
          spaces.pop();
          temp = spaces.join("") + A[i];
          if (A[i + 1] == ",") {
            temp += A[++i];
          }
          output.push(temp);
          temp = "";
          break;
        case ",":
          output.push(spaces.join("") + temp + A[i]);
          temp = "";
          break;
        case " ":
          break;
        default:
          temp += A[i];
          break;
      }
    }

    return output;
  };


  // Alternate approach 

  // prettyJSON = function (A){
  //       let ans = []
  //       let tabs = 0;
  //       let temp = "";
  //       for (let i = 0; i < A.length; i++) {
  //         if (A[i] == " ") {
  //           continue;
  //         } else if (A[i] == "{" || A[i] == "[") {
  //           if (temp != "") {
  //             ans.push(temp);
  //           }
  //           temp = "";

  //           for (let k = 0; k < tabs; k++) temp += "\t";
  //           temp += A[i];
  //           ans.push(temp);
  //           temp = "";
  //           tabs++;
  //         } else if (A[i] == "}" || A[i] == "]") {
  //           if (temp != "") {
  //             ans.push(temp);
  //           }
  //           temp = "";
  //           for (let k = 0; k < tabs - 1; k++) temp += "\t";
  //           temp += A[i];
  //           if (i < A.length && A[i + 1] == ",") temp += A[++i];
  //           ans.push(temp);
  //           temp = "";
  //           tabs--;
  //         } else {
  //           if (temp == "") {
  //             for (let k = 0; k < tabs; k++) temp += "\t";
  //           }
  //           temp += A[i];
  //           if (A[i] == ",") {
  //             ans.push(temp);
  //             temp = "";
  //           }
  //         }
  //       }
  //       return ans;
  // }
}


let res = new Solution();
let A = "{a:1, b: {c:1}, d:4}"
console.log(res.prettyJSON(A));

// This is how the expected output should look like for the above input

// [
//     '{',       
//     '\ta:1,',
//     '\tb:',    
//     '\t{',
//     '\t\tc:1', 
//     '\t},',
//     '\td:4',   
//     '}'
// ]


// {
//     a:1,
//     b:
//     {
//         c:1
//     },
//     c:4
// }
