// Problem link https://www.interviewbit.com/problems/largest-rectangle-in-histogram/

const { Stack } = require("../utils/stack")

class Solution {
    largestRectangleArea = function(A){
        let stack = []
        let max = 0, top, areaWithTop
        let i=0
        while(i<A.length){
            if(stack.length==0 || A[stack[stack.length-1]]<=A[i]){
                stack.push(i)
                i++
            }else{
                top = stack[stack.length-1]
                stack.pop()
                areaWithTop = A[top]*(stack.length==0? i : (i-stack[stack.length-1]-1))
                max = Math.max(max, areaWithTop)
            }
        }
        while(stack.length>0){
            top = stack[stack.length-1]
            stack.pop()
            areaWithTop = A[top]*(stack.length==0? i : (i-stack[stack.length-1]-1))
            max = Math.max(max, areaWithTop)
        }
        return max
    }

    largestRectangleAreaWithStack = function (A) {
        let stack = new Stack()
        let max = 0, top, areaWithTop
        let i=0
        while(i<A.length){
            if(stack.size==0 || A[stack.peek()]<=A[i]){
                stack.push(i)
                i++
            }else{
                top = stack.peek()
                stack.pop()
                areaWithTop = A[top]*(stack.size==0? i : (i-stack.peek()-1))
                max = Math.max(max, areaWithTop)
            }
        }
        while(stack.size>0){
            top = stack.peek()
            stack.pop()
            areaWithTop = A[top]*(stack.size==0? i : (i-stack.peek()-1))
            max = Math.max(max, areaWithTop)
        }
        return max
    }

}


let res = new Solution();
let A = [2, 1, 5, 6, 2, 3]
console.log(res.largestRectangleArea(A));
console.log(res.largestRectangleAreaWithStack(A));
