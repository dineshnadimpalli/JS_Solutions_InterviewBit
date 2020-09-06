// Problem link https://www.interviewbit.com/problems/merge-intervals/

const { Stack } = require("../utils/stack")

class Solution {
    merge = function (A, B){
        let resArr = [...A, B]
        resArr.sort((a,b)=>a[0]-b[0])
        // console.log(resArr)
        let resStack = new Stack()
        resStack.push(resArr[0])
        for(let i=1;i<resArr.length;i++){
            let curr = resArr[i]
            let top = resStack.peek()

            // Approach 1

            // if(top[1]<curr[0]){
            //     resStack.push(curr)
            // }
            // if(top[1]<curr[1] && top[1]>curr[0]){
            //     let newTop = [top[0], curr[1]]
            //     resStack.pop()
            //     resStack.push(newTop)
            // }

            // Approach 2

            if(top[1]>curr[0]){
                let newTop = [Math.min(top[0], curr[0]), Math.max(top[1], curr[1])]
                resStack.pop()
                resStack.push(newTop)
            }else{
                resStack.push(curr)
            }
        }
        return resStack.traverse()
    }

    mergeWithoutStack = function(A, B){
        let resArr = [...A, B]
        resArr.sort((a,b)=>a[0]-b[0])
        let lastIndex = 0
        for(let i=1;i<resArr.length;i++){
            if(resArr[lastIndex][1]>resArr[i][0]){
                resArr[lastIndex][0] = Math.min(resArr[lastIndex][0], resArr[i][0])
                resArr[lastIndex][1] = Math.max(resArr[lastIndex][1], resArr[i][1])
            }else{
                lastIndex++
                resArr[lastIndex] = resArr[i]
            }
        }
        return resArr.slice(0, lastIndex+1)
    }
} 

let res = new Solution();
let A = [[6037774, 6198243], [6726550, 7004541], [8842554, 10866536], [11027721, 11341296], [11972532, 14746848], [16374805, 16706396], [17557262, 20518214], [22139780, 22379559], [27212352, 28404611], [28921768, 29621583], [29823256, 32060921], [33950165, 36418956], [37225039, 37785557], [40087908, 41184444], [41922814, 45297414], [48142402, 48244133], [48622983, 50443163], [50898369, 55612831], [57030757, 58120901], [59772759, 59943999], [61141939, 64859907], [65277782, 65296274], [67497842, 68386607], [70414085, 73339545], [73896106, 75605861], [79672668, 84539434], [84821550, 86558001], [91116470, 92198054], [96147808, 98979097], [96147808, 98979097]] ;
let B = [36210193, 61984219]
console.log(res.merge(A, B));
console.log(res.mergeWithoutStack(A, B));
// console.log([[6037774, 6198243], [6726550, 7004541], [8842554, 10866536], [11027721, 11341296], [11972532, 14746848], [16374805, 16706396], [17557262, 20518214], [22139780, 22379559], [27212352, 28404611], [28921768, 29621583], [29823256, 32060921], [33950165, 64859907], [65277782, 65296274], [67497842, 68386607], [70414085, 73339545], [73896106, 75605861], [79672668, 84539434], [84821550, 86558001], [91116470, 92198054], [96147808, 98979097]])