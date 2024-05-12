class Node{
    constructor(val, priority){
        this.val = val
        this.priority = priority
    }
}

class MaxBinaryHeap{
    constructor(){
        this.value = []
    }
    Insert(element, priority){
        let newNode = new Node(element, priority)
        this.value.push(newNode)
        this.bubbleUp()
    }
    bubbleUp(){
        let inx = this.value.length - 1
        let element = this.value[inx]
        while(inx > 0){
            let parentInx = Math.floor((inx-1)/2)
            let parent = this.value[parentInx]
            if(element.priority >= parent.priority) break 
            this.value[parentInx] = this.value[inx]
            this.value[inx] = parent
            inx = parentInx
        }
    }
    extract(){
        let min = this.value[0]
        let end = this.value.pop()
        if(this.value.length > 0){
            this.value[0] = end
            this.sinking()
        }
        return min
    }
    sinking(){
        let inx = 0
        let element = this.value[0]
        let length = this.value.length
        while(true){
            let leftChildInx = inx * 2 + 1
            let rightChildInx = inx * 2 + 2
            let leftChild, rightChild
            let swap = null
            if(leftChildInx < length){
                leftChild = this.value[leftChildInx]
                if(leftChild.priority < element.priority){
                    swap = leftChildInx
                }
            }
            if(rightChildInx < length){
                rightChild = this.value[rightChildInx]
                if(rightChild.priority < element.priority && rightChild.priority < leftChild.priority){
                    swap = rightChildInx
                }
            }
            if(swap === null) break
            this.value[inx] = this.value[swap]
            this.value[swap] = element
            inx = swap
        }
    }
}

let heap = new MaxBinaryHeap()

heap.Insert("head ach", 3)
heap.Insert("urgent", 1)
heap.Insert("feaver", 2)
heap.Insert("slite pain", 5)

heap.extract()

console.log(heap)