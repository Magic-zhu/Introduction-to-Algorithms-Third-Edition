class MinPriorityQueue {

    constructor(arr) {
        this.queue = []
        if (arr && arr instanceof Array && arr.length >= 1) {
            this.create(arr)
        } else {
            throw new Error('非法传入值')
        }
    }

    // 实现一个简单的拷贝
    copy(input) {
        return JSON.parse(JSON.stringify(input))
    }

    // 构建最小堆
    BuildMinHeap(arr, len) {

    }

    // 维护最小堆
    MinHeap(arr, i, length) {

    }
}

module.exports = MinPriorityQueue