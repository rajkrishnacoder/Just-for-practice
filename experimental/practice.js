const bubbleSort = (arr) => {
    let noSwap;
    for(let i = arr.length; i > 0; i--){
        noSwap = true;
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwap = false
            }
        }
        if(noSwap) break
    }
    return arr
}

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i; j < arr.length; j++) {
            if(arr[i] > arr[j+1]) lowest = j+1
        }
        if(arr[i] !== arr[lowest]){
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}

console.log(selectionSort([10, 2, 3, 1, 0]))