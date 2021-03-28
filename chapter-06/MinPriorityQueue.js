class MinPriorityQueue {

    constructor(arr) {
        this.queue = []
        if (arr && arr instanceof Array && arr.length >= 1) {
            this.create(arr)
        } else {
            throw new Error('非法传入值')
        }
    }

    //提供一个初始化方法 建堆
    create(arr) {
        this.queue = this.copy(arr)
        this.BuildMinHeap(this.queue, this.queue.length)
    }

    // 实现一个简单的拷贝
    copy(input) {
        return JSON.parse(JSON.stringify(input))
    }

    // 构建最小堆
    BuildMinHeap(arr, len) {
        if (len % 2 != 0) {
            len = len + 1;
        }
        for (let i = len / 2; i >= 0; i--) {
            this.MinHeap(arr, i, len)
        }
    }

    // 维护最小堆
    MinHeap(arr, i, length) {
        var minimum = null;
        var node = arr[i]; //保存当前节点
        var left = i * 2 + 1; //定位节点左
        var right = i * 2 + 2; //定位节点右	
        //判断当前有这个节点 （这里会存在当前这个的子节点不存在的情况）处理一下边界情况
        if (left < length) {
            arr[left] && node.priority > arr[left].priority ? minimum = left : minimum = i
        } else {
            minimum = i;
        }
        if (right < length) {
            arr[right] && arr[minimum].priority > arr[right].priority ? minimum = right : null
        }
        //如果不是i是最小节点 以node作为辅助节点 交换位置
        if (minimum != i) {
            arr[i] = arr[minimum];
            arr[minimum] = node;
            this.MinHeap(arr, minimum, length);
        }
    }

    //获取最小优先级的内容
    MINIMUM() {
        return this.copy(this.queue[0])
    }

    //插入一个新的元素
    insert(target) {
        if (!target || !target.priority) return false
        let temp = target.priority
        target.priority = Infinity
        this.queue.push(target)
        this.decrease(this.queue.length - 1, temp)
    }

    //降低一个元素的优先级
    decrease(index, newPriority) {
        if (newPriority >= this.queue[index].priority) return
        this.queue[index].priority = newPriority
        const findParent = (index) => {
            if (index == 0) {
                return null
            }
            return index % 2 == 0 ? (index - 2) / 2 : (index - 1) / 2
        }
        let parent = findParent(index)
        while (parent != null && this.queue[parent].priority > this.queue[index].priority) {
            let box = this.queue[index]
            this.queue[index] = this.queue[parent]
            this.queue[parent] = box
            index = parent
            parent = findParent(parent)
        }
    }

    //获取最低优先级的内容 然后踢出队列
    extractMin() {
        let min = this.copy(this.queue[0])
        this.queue.shift()
        if (this.queue.length != 1) {
            this.MinHeap(this.queue, 0, this.queue.length)
        }
        return min
    }
}

module.exports = MinPriorityQueue