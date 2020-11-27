const QuickSort = require('../chapter-07/QuickSort')
let oriArr = [2, 8, 7, 1, 3, 5, 6, 4]
QuickSort(oriArr, 0, oriArr.length - 1)
test('快速排序',()=>{
    expect(oriArr).toEqual([1,2,3,4,5,6,7,8])
})