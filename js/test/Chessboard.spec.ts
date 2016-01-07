"use strict";

import { Chessboard } from "../src/Chessboard";

describe("Chessboard", () => {
    var chessboard = new Chessboard(document.createDocumentFragment(), [8, 8]);

    it("creates a matrix with length of 8 rows", () => {
        expect(Object.keys(chessboard.getMatrix()).length).toEqual(8);
    });

    it("each row of a matrix consists of 8 columns", () => {
        var matrix = chessboard.getMatrix();
        for (var row in matrix) {
            expect(Object.keys(matrix[row]).length).toEqual(8);
        }
    });

    it("each node of a matrix has an initial value of -1", () => {
        var matrix = chessboard.getMatrix();
        for (var x in matrix) {
            var row = matrix[x]
            for (var y in row) {
                expect(row[y]).toEqual(-1);
            }
        }
    });

    it("creates a DOM node of type 'table'", () => {
        expect(chessboard.getTable().nodeName).toEqual("TABLE");
    });

    it("each cell of a DOM table has appropriate color", () => {
        var table = chessboard.getTable();
        for (var x = 0, row; row = table.rows[x]; x++) {
            for (var y = 0, col; col = row.cells[y]; y++) {
                if ((x + y) % 2) {
                    expect(col.className).toEqual('dark');
                } else {
                    expect(col.className).toEqual('light');
                }
            }
        }
    });
});
