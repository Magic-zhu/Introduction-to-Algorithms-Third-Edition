const Strassen = require('../chapter-04/Strassen')
let A = [[1,3],[7,5]]
let B = [[6,8],[4,2]]
test('Strassen算法', () => {
    let r = Strassen(A, B)
    expect(r[0]).toEqual([18, 14]);
    expect(r[1]).toEqual([62, 66]);
});
