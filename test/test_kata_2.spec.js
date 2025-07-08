"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const _2_kata_1 = require("../src/2_kata");
describe('kata two', function () {
    it('given 0 items can accept an input of how many items, cost per item, state code, and calculate total value', function () {
        const commands = [
            "0",
            "5",
            "NV"
        ];
        const totalCost = (0, _2_kata_1.input)(commands);
        assert_1.default.equal(totalCost, 0);
    });
    [
        { state: "NV", multiplier: 1.08 },
        { state: "UT", multiplier: 1.0685 },
        { state: "TX", multiplier: 1.0625 },
        { state: "AL", multiplier: 1.0400 },
        { state: "CA", multiplier: 1.0825 },
    ].forEach(({ state, multiplier }) => it(`given 1 item and a ${state} state code can accept an input of how many items, cost per item, state code, ` +
        'and calculate total value', function () {
        const commands = [
            "1",
            "5",
            state
        ];
        const totalCost = (0, _2_kata_1.input)(commands);
        assert_1.default.equal(totalCost, 5 * multiplier);
    }));
    [
        { amount: "1000", discount: 0.03 },
        { amount: "5000", discount: 0.05 },
        { amount: "7000", discount: 0.07 },
        { amount: "10000", discount: 0.10 },
        { amount: "50000", discount: 0.15 },
    ].forEach(({ amount, discount }) => it(`given ${amount} of items can accept an input of how many items, cost per item, state code, and calculate total value`, function () {
        const commands = [
            "1",
            amount,
            "NV"
        ];
        const totalCost = (0, _2_kata_1.input)(commands);
        assert_1.default.equal(totalCost, +amount * (1 - discount) * (1.08));
    }));
});
