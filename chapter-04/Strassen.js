//  大前提 假定nxn的矩阵

/**
 * 初始化矩阵
 * @param {*} l - n阶矩阵
 */
function initMatrix(l) {
    let r = [];
    for (let i = 0; i < l; i++) {
        r.push([])
    }
    return r
}

/**
 * 根据区域块截取(分成4部分)
 * @param {*} A - 原矩阵
 * @param {*} a - 1或者2
 * @param {*} b - 1或者2
 */
function sliceMatrix(A, a, b) {
    let n = A.length / 2
    let matrix = initMatrix(n)
    let x = 0, y = 0;
    for (let j = (a - 1) * n; j < a * n; j++) {
        for (let i = (b - 1) * n; i < b * n; i++) {
            matrix[x][y] = A[j][i]
            ++y
        }
        ++x
    }
    return matrix
}
// 加减运算
function MatrixPM(A, B, type) {
    //代码 省略
    let n = A.length
    let rt = initMatrix(n)
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            if (type == '-') {
                rt[j][i] = A[j][i] - B[j][i]
            } else {
                rt[j][i] = A[j][i] + B[j][i]
            }
        }
    }
    return rt
}
// 合并矩阵
function MergeMatrix(A, B, C, D) {
    let n = A.length;
    let matrix = initMatrix(2 * n)
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            matrix[j][i] = A[j][i]
            matrix[j][i + n] = B[j][i]
            matrix[j + n][i] = C[j][i]
            matrix[j + n][i + n] = D[j][i]
        }
    }
    return matrix
}
function Strassen(A, B) {
    if (A.length == 1) {
        return [[A[0] * B[0]]]
    }
    let n = A.length;
    let s1 = MatrixPM(sliceMatrix(B, 1, 2), sliceMatrix(B, 2, 2), '-');
    let s2 = MatrixPM(sliceMatrix(A, 1, 1), sliceMatrix(A, 1, 2), '+');
    let s3 = MatrixPM(sliceMatrix(A, 2, 1), sliceMatrix(A, 2, 2), '+');
    let s4 = MatrixPM(sliceMatrix(B, 2, 1), sliceMatrix(B, 1, 1), '-');
    let s5 = MatrixPM(sliceMatrix(A, 1, 1), sliceMatrix(A, 2, 2), '+');
    let s6 = MatrixPM(sliceMatrix(B, 1, 1), sliceMatrix(B, 2, 2), '+');
    let s7 = MatrixPM(sliceMatrix(A, 1, 2), sliceMatrix(A, 2, 2), '-');
    let s8 = MatrixPM(sliceMatrix(B, 2, 1), sliceMatrix(B, 2, 2), '+');
    let s9 = MatrixPM(sliceMatrix(A, 1, 1), sliceMatrix(A, 2, 1), '-');
    let s10 = MatrixPM(sliceMatrix(B, 1, 1), sliceMatrix(B, 1, 2), '+');
    let p1 = Strassen(sliceMatrix(A, 1, 1), s1)
    let p2 = Strassen(s2, sliceMatrix(B, 2, 2))
    let p3 = Strassen(s3, sliceMatrix(B, 1, 1))
    let p4 = Strassen(sliceMatrix(A, 2, 2), s4)
    let p5 = Strassen(s5, s6)
    let p6 = Strassen(s7, s8)
    let p7 = Strassen(s9, s10)
    let c11 = MatrixPM(MatrixPM(MatrixPM(p5, p4, '+'), p2, '-'), p6, '+')
    let c12 = MatrixPM(p1, p2, '+')
    let c21 = MatrixPM(p3, p4, '+')
    let c22 = MatrixPM(MatrixPM(MatrixPM(p1, p5, '+'), p3, '-'), p7, '-')
    return MergeMatrix(c11, c12, c21, c22)
}
module.exports = Strassen