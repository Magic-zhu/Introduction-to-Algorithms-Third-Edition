const PrintCutRodSolution = require("../chapter-15/PrintCutRodSolution");

const MAP = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
test("钢条割据", () => {
    expect(PrintCutRodSolution(MAP, 4).money).toBe(10);
});
test("钢条割据", () => {
    expect(PrintCutRodSolution(MAP, 7).money).toBe(18);
});
test("钢条割据", () => {
    expect(PrintCutRodSolution(MAP, 10).money).toBe(30);
});
