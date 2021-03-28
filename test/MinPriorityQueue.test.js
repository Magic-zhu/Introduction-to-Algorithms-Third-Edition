const MinPriorityQueue = require('../chapter-06/MinPriorityQueue')

let a = new MinPriorityQueue([
    { priority: 7, todo: '吃饭' },
    { priority: 6, todo: '洗澡' },
    { priority: 5, todo: '睡觉' },
    { priority: 4, todo: '玩手机' },
    { priority: 3, todo: '打篮球' },
    { priority: 2, todo: '打乒乓' },
    { priority: 1, todo: '喝水' }
])

a.insert({priority:0.5,todo:'旅游'})
test('MinPriorityQueue',()=>{
    expect(a.queue[0].todo).toBe('旅游')
})

