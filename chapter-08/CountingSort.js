function CountingSort(arr) {
    let len = arr.length;
    let max = Math.max.apply(null, arr);
    let temp = new Array(max + 1).fill(null);
    let result = [];
    for (let i = 0; i < len; i++) {
        temp[arr[i]] = temp[arr[i]] ? temp[arr[i]] + 1 : 1
    }
    temp.forEach((e, index) => {
        if (e != null) {
            for (let i = 0; i < e; i++) {
                result.push(index)
            }
        }
    })
    return result
}
console.log(CountingSort([2, 5, 3, 0, 2, 3, 1, 3]))