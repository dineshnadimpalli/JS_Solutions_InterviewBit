// Problem link https://www.interviewbit.com/problems/implement-strstr/

class Solution {
  strStr = function (A, B) {
    if (A.length == 0 || B.length == 0) return -1;
    let Blen = B.length;
    let res = -1;
    let tmp = 0;
    let i = 0,
      j = 0;

    // approach 1

    // for(let i=0;i<A.length;i++){
    //     if(A.substring(i, i+Blen)==B){
    //         res = i
    //         break
    //     }
    // }

    // approach 2
    
    while (i < A.length) {
      if (A[i] == B[j]) {
        if (j == 0) tmp = i;
        j++;
        if (j == Blen) return tmp;
      } else if (j > 0) {
        j = 0;
        i = tmp;
      }
      i++;
    }
    return -1;
  }


  // using KMP algorithm to achieve it in O(n) 

  strStrKMP= function(A, B){
    let lps = this.kmp(B)
    let j=0, i=0
    let len = A.length
    while(i<len){
        if(A[i]==B[j]){
            i++
            j++
        }
        if(j==B.length){
            return i-j
        }else if(i<len && A[i]!=B[j]){
            if(j!=0){
                j = lps[j-1]
            }else{
                i++
            }
        }
    }
    return -1
}


kmp= function(A){
    let j=0, i=1
    let arr = new Array(A.length)
    let len = arr.length
    arr[0] = 0
    while(i<len){
        if(A[i]==A[j]){
            arr[i] = j+1
            i++
            j++
        }else{
            if(j!=0){
                j = arr[j-1]
            }else{
                arr[i] = 0
                i++
            }
        }
    }
    return arr
}
}

let res = new Solution();
let A = "bbaabbbbbaabbaabbbbbbabbbabaabbbabbabbbbababbbabbabaaababbbaabaaaba",
  B = "babaaa";
console.log(res.strStr(A, B));  // 48
console.log(res.strStrKMP(A, B));  // 48