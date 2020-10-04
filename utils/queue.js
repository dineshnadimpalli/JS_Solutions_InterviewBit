class Node {
    constructor(val){
        this.val = val
        this.next = null
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
        this.first = this.first.next
        this.size--
        return tmp.val
    }

    isEmpty(){
        return this.size==0 ? true : false
    }

    firstVal(){
        if(this.isEmpty())  return null
        return this.first.val
    }

    lastVal(){
        if(this.isEmpty())  return null
        return this.last.val
    }
}


module.exports = {
    Queue
}