// Problem link https://www.interviewbit.com/problems/first-non-repeating-character-in-a-stream-of-characters/

const { Queue } = require("../utils/queue")

class Solution {
    solve = function(A){
        let hash = new Map()
        let queue = []
        let res = ''
        for(let i=0;i<A.length;i++){
            if(hash.has(A[i])){
                hash.set(A[i], hash.get(A[i])+1)
            }else{
                hash.set(A[i], 1)
            }
            queue.push(A[i])
            while(queue.length>0 && hash.get(queue[0])>1){
                queue.shift()
            }
            res += queue.length==0 ? '#' : queue[0]
        }
        return res
    }

    solveWithQueue = function(A){
        let hash = new Map()
        let queue = new Queue()
        let res = ''
        for(let i=0;i<A.length;i++){
            if(hash.has(A[i])){
                hash.set(A[i], hash.get(A[i])+1)
            }else{
                hash.set(A[i], 1)
            }
            queue.enqueue(A[i])
            while(!queue.isEmpty() && hash.get(queue.firstVal())>1){
                queue.dequeue()
            }
            res += queue.isEmpty() ? '#' : queue.firstVal()
        }
        return res
    }
}


let res = new Solution();
let A = 'abadbc'
console.log(res.solve(A));  // aabbdd
console.log(res.solveWithQueue(A));

let B = 'aabaadda'
console.log(res.solve(B));  // a#bbbbbb
console.log(res.solveWithQueue(B));