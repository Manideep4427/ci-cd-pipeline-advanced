const { describe, it } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, isEven } = require('../src/index.js');

describe('Math utilities', () => {
  it('should add two numbers correctly', () => {
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(add(-1, 1), 0);
    assert.strictEqual(add(0, 0), 0);
  });

  it('should subtract two numbers correctly', () => {
    assert.strictEqual(subtract(5, 3), 2);
    assert.strictEqual(subtract(0, 5), -5);
  });

  it('should multiply two numbers correctly', () => {
    assert.strictEqual(multiply(3, 4), 12);
    assert.strictEqual(multiply(-2, 3), -6);
    assert.strictEqual(multiply(0, 100), 0);
  });

  it('should check if a number is even', () => {
    assert.strictEqual(isEven(4), true);
    assert.strictEqual(isEven(7), false);
    assert.strictEqual(isEven(0), true);
  });
});