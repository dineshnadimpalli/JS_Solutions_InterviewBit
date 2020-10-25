class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}


class Queue {
    constructor(){
        this.size = 0
        this.first = null
        this.last = null
    }

    enqueue(val){
        let newNode = new Node(val)
        if(this.isEmpty()){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            newNode.prev = this.last
            this.last = newNode
        }
        return ++this.size
    }

    dequeue(){
        if(this.isEmpty())  return null
        if(this.first==this.last){
            this.last = null
        }
        let tmp = this.first
        let next = tmp.next
        if(next){
            next.prev = null
        }
        this.first = this.first.next
        this.size--
        return tmp.val
    }

    isEmpty(){
        return this.size==0 ? true : false
    }

    getFirst(){
        if(this.isEmpty())  return null
        return this.first.val
    }

    getLast(){
        if(this.isEmpty())  return null
        return this.last.val
    }

    removeFromLast(){
        if(this.isEmpty())  return null
        let prev = this.last.prev
        if(prev){
            prev.next = null
        }
        this.last.prev = null
        this.last = prev
        this.size--
    }

    traverse(){
        let res = []
        let curr = this.first
        while(curr){
            res.push(curr.val)
            curr = curr.next
        }
        return res
    }

    reverseTraverse(){
        let res = []
        let curr = this.last
        while(curr){
            res.push(curr.val)
            curr = curr.prev
        }
        return res
    }
}

// let q = new Queue()

// a = [1,2,4,5,6]

// a.forEach(e => {
//     q.enqueue(e)
// })

// console.log(q)

// console.log(q.traverse())
// console.log(q.reverseTraverse())

// q.removeFromLast()
// console.log(q.traverse())
// console.log(q.reverseTraverse())

module.exports = {
    Queue
}