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
//最长公共子序列
function getLcs(X, Y) {
  const b = LcsLength(X, Y).b;
  let str = "";
  function select(b, X, i, j) {
    if (i == 0 || j == 0) return;
    if (b[i][j] == "c") {
      select(b, X, i - 1, j - 1);
      str = str + X[i - 1];
    } else if (b[i][j] == "b") {
      select(b, X, i - 1, j);
    } else {
      select(b, X, i, j - 1);
    }
  }
  select(b, X, X.length, Y.length);
  return str;
}

// 生成序列表
function LcsLength(x, y) {
  let m = x.length;
  let n = y.length;
  let b = newTable(m + 1, n + 1);
  let c = newTable(m + 1, n + 1);
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (x[i - 1] == y[j - 1]) {
        c[i][j] = c[i - 1][j - 1] + 1;
        b[i][j] = "c";
      } else if (c[i - 1][j] >= c[i][j - 1]) {
        c[i][j] = c[i - 1][j];
        b[i][j] = "b";
      } else {
        c[i][j] = c[i][j - 1];
        b[i][j] = "a";
      }
    }
  }
  return { b, c };
}
module.exports = getLcs;
