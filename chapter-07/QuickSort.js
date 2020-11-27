function exchange(arr, a, b) {
    let tem = arr[a]
    arr[a] = arr[b]
    arr[b] = tem
}
function partition(input, l, r) {
    let s = input[r]
    let i = l - 1
    for (let j = l; j < r; j++) {
        if (input[j] <= s) {
            ++i
            exchange(input, i, j)
        }
    }
    exchange(input, i + 1, r)
    return i + 1
}

function QuickSort(arr, l, r) {
    if (l < r) {
        let mid = partition(arr, l, r)
        QuickSort(arr, l, mid - 1)
        QuickSort(arr, mid + 1, r)
    }
}
module.exports = QuickSort