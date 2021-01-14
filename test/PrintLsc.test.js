const getLcs = require("../chapter-15/PrintLsc");
const X = "ABCBDAB";
const Y = "BDCABA";

test("最长公共子序列", () => {
  expect(getLcs(X, Y)).toBe("BCBA");
});
