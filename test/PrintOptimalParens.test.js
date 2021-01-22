const PrintOptimalParens = require('../chapter-15/PrintOptimalParens')
const input = [30, 35, 15, 5, 10, 20, 25]
test('矩阵链乘', () => {
    expect(PrintOptimalParens(input)).toBe('((A1(A2A3))((A4A5)A6))')
})