"use strict";

import { Knight } from "../src/Knight";

describe("Knight", () => {
    var knight = new Knight();

    it("makes correct moves", () => {
        for (var i in knight.possibleMoves['x']) {
            var x = knight.possibleMoves['x'][i];
            var y = knight.possibleMoves['y'][i];

            if (Math.abs(pageXOffset) == 1) {
                expect(Math.abs(y)).toEqual(2);
            }

            if (Math.abs(x) == 2) {
                expect(Math.abs(y)).toEqual(1);
            }
        }
    });
});
