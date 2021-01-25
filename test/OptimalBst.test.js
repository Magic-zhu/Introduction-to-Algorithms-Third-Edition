const OptimalBst = require('../chapter-15/OptimalBst')

let p = [0, 15, 10, 5, 10, 20]
let q = [5, 10, 5, 5, 5, 10]
let n = 5

test('最优二叉搜索树',()=>{
    expect(OptimalBst(p, q, n)).toEqual([ 'k2', 'k1', 'k5', 'k4', 'k3' ])
})