const GreedyActivitySelector = require('../chapter-16/GreedyActivitySelector')
const s = [1,3,0,5,3,5,6,8,8,2,12]
const f = [4,5,6,7,9,9,10,11,12,14,16]
test('活动选择问题',()=>{
    expect(GreedyActivitySelector(s,f)).toEqual([0,3,7,10])
})