"use strict";

import { Chessboard } from "../src/Chessboard";

describe("Chessboard", () => {
    var chessboard = new Chessboard(document.createDocumentFragment(), [8, 8]);

    it("creates a matrix with length of 8 rows", () => {
        expect(Object.keys(chessboard.matrix).length).toEqual(8);
    });

    it("each row of a matrix consists of 8 columns", () => {
        var matrix = chessboard.matrix;
        for (var row in matrix) {
            expect(Object.keys(matrix[row]).length).toEqual(8);
        }
    });

    it("each node of a matrix has an initial value of -1", () => {
        var matrix = chessboard.matrix;
        for (var x: int in matrix) {
            var row = matrix[x]
            for (var y in row) {
                expect(row[y]).toEqual(-1);
            }
        }
    });

    it("creates a DOM node of type 'table'", () => {
        expect(chessboard.table.nodeName).toEqual("TABLE");
    });

    it("each cell of a DOM table has appropriate color", () => {
        var table = chessboard.table;
        for (var x: int = 0, row: any; row = table.rows[x]; x++) {
            for (var y: int = 0, col: any; col = row.cells[y]; y++) {
                if ((x + y) % 2) {
                    expect(col.className).toEqual('chessboard__cell chessboard__cell--dark');
                } else {
                    expect(col.className).toEqual('chessboard__cell chessboard__cell--light');
                }
            }
        }
    });
});
