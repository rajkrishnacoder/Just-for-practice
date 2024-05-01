//this is for merging tow sorted array
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            result.push(arr2[j])
            j++
        }else if(arr1[i] === arr2[j]){
            result.push(arr1[i])
            result.push(arr2[j])
            i++
            j++
        }
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }
    }
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}

// console.log(merge([1,2,3], [5,7,9]))

// mergesort
 
function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}
console.log(mergeSort([3, 2, 1, 4]))


