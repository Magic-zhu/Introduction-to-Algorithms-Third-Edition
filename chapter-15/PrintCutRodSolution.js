/**
 * @param pMap {object}
 * @param n {number}
 */
function ExtendedBottomUpCutRod(pMap, n) {
  let r = new Array(n + 1).fill(0);
  let s = new Array(n + 1).fill(0);
  r[0] = 0;
  for (let j = 1; j < n + 1; j++) {
    q = -1;
    for (let i = 1; i < n + 1; i++) {
      if (q < pMap[i] + r[j - i]) {
        q = pMap[i] + r[j - i];
        s[j] = i;
      }
    }
    r[j] = q;
  }
  return { s, r };
}
/**
 * @param pMap {object}
 * @param n {number}
 */
function PrintCutRodSolution(pMap, n) {
  const { r, s } = ExtendedBottomUpCutRod(pMap, n);
  let solution = [];
  let l = n;
  while (l > 0) {
    solution.push(s[l]);
    l = l - s[l];
  }
  return { solution, money: r[n] };
}
module.exports = PrintCutRodSolution;
