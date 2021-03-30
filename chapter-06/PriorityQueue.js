class PriorityQueue {

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
    //获取最高优先级的内容
    MAXIMIUM() {
        return this.copy(this.queue[0])
    }
    //插入一个新的元素
    insert(target) {
        if (!target || !target.priority) return false
        let temp = target.priority
        target.priority = -1
        this.queue.push(target)
        this.increase(this.queue.length-1,temp)
    }
    //提升一个元素的优先级
    increase(index, newPriority) {
        if (newPriority <= this.queue[index].priority) return
        this.queue[index].priority = newPriority
        const findParent = (index) => {
            if (index == 0) {
                return null
            }
            return index % 2 == 0 ? (index - 2) / 2 : (index - 1) / 2
        }
        let parent = findParent(index)
        while (parent != null && this.queue[parent].priority < this.queue[index].priority) {
            let box = this.queue[index]
            this.queue[index] = this.queue[parent]
            this.queue[parent] = box
            index = parent
            parent = findParent(parent)
        }
    }
    //获取最高优先级的内容 然后踢出队列
    extractMax() {
        let max = this.copy(this.queue[0])
        this.queue.shift()
        if (this.queue.length != 1) {
            this.MaxHeap(this.queue, 0, this.queue.length)
        }
        return max
    }

    //提供一个初始化方法 建堆
    create(arr) {
        this.queue = this.copy(arr)
        this.BuildMaxHeap(this.queue, this.queue.length)
    }

    MaxHeap(arr, i, length) {
        var largest = null;
        var node = arr[i]; //保存当前节点
        var left = i * 2 + 1; //定位节点左
        var right = i * 2 + 2; //定位节点右	
        //判断当前有这个节点 （这里会存在当前这个的子节点不存在的情况）处理一下边界情况
        if (left < length) {
            arr[left] && node.priority < arr[left].priority ? largest = left : largest = i
        } else {
            largest = i;
        }
        if (right < length) {
            arr[right] && arr[largest].priority < arr[right].priority ? largest = right : null
        }
        //如果不是i是最大节点 以node作为辅助节点 交换位置
        if (largest != i) {
            arr[i] = arr[largest];
            arr[largest] = node;
            this.MaxHeap(arr, largest, length);
        }
    }

    //建立最大堆
    BuildMaxHeap(arr, len) {
        if (len % 2 != 0) {
            len = len + 1;
        }
        for (let i = len / 2; i >= 0; i--) {
            this.MaxHeap(arr, i, len)
        }
    }

}

module.exports = PriorityQueue