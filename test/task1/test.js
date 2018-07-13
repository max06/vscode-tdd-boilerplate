const expect = require("chai").expect;

const sourceFile = require("../../src/task1/index");

describe("Test suite", () => {
    it("should success", () => {
        expect(true).to.be.true;
    });

    it("should fail", () => {
        expect(true).to.be.false;
    });

    it("should execute the function", () => {
        expect(sourceFile(true)).to.be.true;
    });

    it("should execute the function with false", () => {
        expect(sourceFile(false)).to.be.false;
    });
});