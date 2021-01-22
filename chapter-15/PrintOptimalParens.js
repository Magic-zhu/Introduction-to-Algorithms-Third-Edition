//生成二维数组
function newTable(m, n) {
    let arr = [];
    for (let i = 0; i < m; i++) {
        let arrInside = [];
        for (let j = 0; j < n; j++) {
            arrInside.push(0);
        }
        arr.push(arrInside);
    }
    return arr;
}


function MatrixChainOrder(p) {
    let n = p.length - 1
    let m = newTable(n + 1, n + 1)
    let s = newTable(n + 1, n + 1)
    for (let l = 2; l < n + 1; l++) {
        for (let i = 1; i < n - l + 2; i++) {
            j = i + l - 1
            m[i][j] = Infinity
            for (k = i; k < j; k++) {
                q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j]
                if (q < m[i][j]) {
                    m[i][j] = q
                    s[i][j] = k
                }
            }
        }
    }
    return { m, s }
}


function PrintOptimalParens(input) {
    const r = MatrixChainOrder(input)
    var plan = ''
    let print = (s, i, j) => {
        if (i == j) {
            plan = plan + 'A' + i
        } else {
            plan = plan + '('
            print(s, i, s[i][j])
            print(s, s[i][j] + 1, j)
            plan = plan + ')'
        }
    }
    print(r.s, 1, input.length - 1)
    return plan
}

module.exports = PrintOptimalParens
