const QuickSort = require('../chapter-07/QuickSort')

// 这里的位数是要相同的 不然桶排序的意义不大

function BucketSort(arr) {
    let l = arr.length
    if (l <= 1) return arr
    let max = Math.max.apply(null, arr)
    let result = []
    let buckets = new Array(l).fill([]) //建造一个二维数组
    for (let i = 0; i < l; i++) {
        let BucketIndex = parseInt(arr[i].toString()[0])
        buckets[BucketIndex].length == 0 ? buckets[BucketIndex] = [arr[i]] : buckets[BucketIndex].push(arr[i])
    }
    buckets.forEach(e => {
        QuickSort(e, 0, e.length - 1)
        result = result.concat(e)
    })
    return result
}

module.exports = BucketSort