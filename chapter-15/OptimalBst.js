//生成二维数组
function newTable(m, n) {
    let arr = [];
    for (let i = 0; i <= m; i++) {
        let arrInside = [];
        for (let j = 0; j <= n; j++) {
            arrInside.push(0);
        }
        arr.push(arrInside);
    }
    return arr;
}

//生成对照表
function createTable(p, q, n) {
    let e = newTable(n + 1, n + 1)
    let w = newTable(n + 1, n + 1)
    let root = newTable(n, n)
    for (let i = 1; i <= n + 1; i++) {
        e[i][i - 1] = q[i - 1]
        w[i][i - 1] = q[i - 1]
    }
    for (let l = 1; l <= n; l++) {
        for (let i = 1; i <= n - l + 1; i++) {
            j = i + l - 1
            e[i][j] = Infinity
            w[i][j] = w[i][j - 1] + p[j] + q[j]
            for (let r = i; r <= j; r++) {
                let t = e[i][r - 1] + e[r + 1][j] + w[i][j]
                if (t < e[i][j]) {
                    e[i][j] = t
                    root[i][j] = r
                }
            }
        }
    }
    return { e, root }
}

function OptimalBst(p, q, n) {
    const { root } = createTable(p, q, n)
    let tree = []
    const find = (root, i, j) => {
        if (i <= j) {
            let r = root[i][j]
            tree.push('k' + r)
            find(root, i, r - 1)
            find(root, r + 1, j)
        }
    }
    find(root, 1, 5)
    return tree
}

module.exports = OptimalBst
