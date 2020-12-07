const BucketSort  = require('../chapter-08/BucketSort.js')
const input = [78, 17, 39, 26, 72, 94, 21, 12, 23, 68]
test('桶排序', () => {
    expect(BucketSort(input)).toEqual([
        12, 17, 21, 23, 26,
        39, 68, 72, 78, 94
      ])
})