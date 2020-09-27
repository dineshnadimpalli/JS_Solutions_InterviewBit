// Problem link https://www.interviewbit.com/problems/sort-by-color/

// Note: The problem is not currently available in Javascript to solve but the below logic will help solve it

class Solution {
  sortColors = function (A) {
    let i = 0,
      j = 1;
    let count = 0;
    while (count < 3 && i < A.length && j < A.length) {
      while (i < A.length && j < A.length) {
        if (A[i] > A[j]) {
          let tmp = A[i];
          A[i] = A[j];
          A[j] = tmp;
          j++;
        } else if (A[i] == A[j]) {
          // console.log(i, j, count);
          if (A[i] > count) {
            j++;
          } else {
            let tmp = A[i + 1];
            A[i + 1] = A[j];
            A[j] = tmp;
            i++;
            j++;
          }
        } else {
          j++;
        }
      }
      count++;
      ++i;
      j = i + 1;
    }
  };

  sortColors2 = function (A) {
    let zeroCount = 0,
      oneCount = 0,
      twoCount = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] == 0) zeroCount++;
      else if (A[i] == 1) oneCount++;
      else if (A[i] == 2) twoCount++;
    }
    // A = [];  this won't clean up the original array 
    A.splice(0, A.length)   // use this to update the original array
    for (let i = 0; i < zeroCount; i++) {
      A.push(0);
    }
    for (let i = 0; i < oneCount; i++) {
      A.push(1);
    }
    for (let i = 0; i < twoCount; i++) {
      A.push(2);
    }
    console.log(A)
  };
}


let res = new Solution();
let A = [1, 1, 2, 2, 2, 0, 2, 0, 1, 2, 0];
console.log(A);
console.log(res.sortColors(A));
console.log(A);

let B = [2, 1, 0, 0, 1, 2];
console.log(B);
console.log(res.sortColors(B));
console.log(B);

let C = [1, 1, 2, 2, 2, 0, 2, 0, 1, 2, 0];
console.log(C);
console.log(res.sortColors2(C));
console.log(C);

let D = [2, 1, 0, 0, 1, 2];
console.log(D);
console.log(res.sortColors2(D));
console.log(D);


// For Java solution refer to the below code

// Solution 1

// public class Solution {
//     public void sortColors(ArrayList<Integer> a) {
//         int i=0,j=1;
//         int count = 0;
//         while(count<3 && i<a.size() && j<a.size()){
//             while(i<a.size() && j<a.size()){
//                 if(a.get(i)>a.get(j)){
//                     int tmp = a.get(i);
//                     a.set(i, a.get(j));
//                     a.set(j, tmp);
//                     j++;
//                 }else if(a.get(i).equals(a.get(j))){
//                     // System.out.println(i + " "+j+" "+ count);
//                     if(a.get(i)>count){
//                         j++;
//                     }else{
//                         int tmp = a.get(i+1);
//                         a.set(i+1, a.get(j));
//                         a.set(j, tmp);
//                         i++;
//                         j++;
//                     }
//                 }else{
//                     j++;
//                 }
//             }
//             count++;
//             ++i;
//             j=i+1;
//         }
//     }
// }


// Solution 2

// public class Solution {
// 	public void sortColors(ArrayList<Integer> a) {
// 	    int count0 = 0, count1 = 0, count2 = 0;
// 	    for (int n : a) {
// 	        switch (n) {
// 	            case 0 : count0++; break;
// 	            case 1 : count1++; break;
// 	            default : count2++;
// 	        }
// 	    }
// 	    a.clear();
// 	    for (int i = 0; i < count0; i++) {
// 	        a.add(0);
// 	    }
// 	    for (int i = 0; i < count1; i++) a.add(1);
// 	    for (int i = 0; i < count2; i++) a.add(2);
// 	}
// }
