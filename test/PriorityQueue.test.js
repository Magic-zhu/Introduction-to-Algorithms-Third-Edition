let pq = new PriorityQueue([
    { priority: 1, todo: '吃饭' },
    { priority: 2, todo: '洗澡' },
    { priority: 3, todo: '睡觉' },
    { priority: 4, todo: '玩手机' },
    { priority: 5, todo: '打篮球' },
    { priority: 6, todo: '打乒乓' },
    { priority: 7, todo: '喝水' }
])
pq.increase(6, 8)
pq.insert({priority: 9, todo: '我是新加的'})
console.log(pq.queue)