const findMaxSubarray = require('../chapter-04/findMaxSubarray')
let input = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, -12, -5, -22, 15, -4, 7]
test('最大子数组测试', () => {
    expect(findMaxSubarray(input)[0]).toEqual([18,20,-7,12]);
});
