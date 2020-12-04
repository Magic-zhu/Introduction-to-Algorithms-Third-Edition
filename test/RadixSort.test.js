const RadixSort = require('../chapter-08/RadixSort')
let input = [2, 5, 3, 0, 2, 3, 1, 3]
test('计数排序', () => {
    expect(RadixSort(input)).toEqual([
        0, 1, 2, 2,
        3, 3, 3, 5
    ])
})