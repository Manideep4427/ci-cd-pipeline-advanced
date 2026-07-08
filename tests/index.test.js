const test = require("node:test");
const assert = require("node:assert");

const {
    add,
    subtract,
    multiply,
    isEven
} = require("../src/math");

test("addition", () => {
    assert.strictEqual(add(2, 3), 5);
});

test("subtraction", () => {
    assert.strictEqual(subtract(5, 2), 3);
});

test("multiplication", () => {
    assert.strictEqual(multiply(4, 3), 12);
});

test("even", () => {
    assert.strictEqual(isEven(10), true);
});