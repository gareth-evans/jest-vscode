jest.autoMockOff();

import {Math} from "../math";

let math = new Math();

describe("math", () => {
    it("add two numbers", () => {
        let result = math.add(2, 4);

        expect(result).toEqual(6);
    });

    it("substract one number from another", () => {
        let result = math.subtract(3,6);
        expect(result).toEqual(-3);
    })
});