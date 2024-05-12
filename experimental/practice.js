class MaxBinaryHeap{
    constructor(){
        this.value = []
    }
    Insert(element){
        this.value.push(element)
        this.bubbleUp()
    }
    bubbleUp(){
        let inx = this.value.length - 1
        let element = this.value[inx]
        while(inx > 0){
            let parentInx = Math.floor((inx-1)/2)
            let parent = this.value[parentInx]
            if(element >= parent) break 
            this.value[parentInx] = this.value[inx]
            this.value[inx] = parent
            inx = parentInx
        }
    }
    extract(){
        let max = this.value[0]
        let end = this.value.pop()
        if(this.value.length > 0){
            this.value[0] = end
            this.sinking()
        }
        return max
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
                if(leftChild < element){
                    swap = leftChildInx
                }
            }
            if(rightChildInx < length){
                rightChild = this.value[rightChildInx]
                if(rightChild < element && rightChild < leftChild){
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
heap.Insert(55)
heap.Insert(1)
heap.Insert(60)
heap.Insert(79)

heap.extract()
heap.extract()
heap.extract()

console.log(heap)