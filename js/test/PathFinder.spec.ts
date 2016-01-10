"use strict";

import { Knight } from "../src/Knight";
import { Chessboard } from "../src/Chessboard";
import { PathFinder } from "../src/PathFinder";


describe("PathFinder", () => {
    var chessboard = new Chessboard(document.createDocumentFragment(), [8, 8]);
    var pathFinder = new PathFinder(chessboard.matrix, chessboard.table, new Knight());

    var dataProvider = [
        {iX: 1, iY: 3, fX: 3, fY: 2, expected: 1},
        {iX: 0, iY: 0, fX: 3, fY: 7, expected: 4},
        {iX: 7, iY: 0, fX: 0, fY: 7, expected: 6},
        {iX: 7, iY: 0, fX: 7, fY: 7, expected: 5},
    ];

    it("finds shortest path to the specified points", () => {
        for(var i in dataProvider) {
            pathFinder.run(dataProvider[i].iX, dataProvider[i].iY);
            pathFinder.run(dataProvider[i].fX, dataProvider[i].fY);
            expect(pathFinder.amountOfMoves).toEqual(dataProvider[i].expected);
        }
    });
});
