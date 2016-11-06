"use strict";
/**
 * Class builds a chessboard DOM structure and creates a matrix, which reflects this structure
 */
var Chessboard = (function () {
    /**
     *
     * @param _canvas       DOM element to append a chessboard table to
     * @param dimensions    Array with a chessboard dimensions (x, y)
     */
    function Chessboard(_canvas, dimensions) {
        this._canvas = _canvas;
        this._matrix = Object.create(null);
        this.buildBoard(dimensions[0], dimensions[1]);
    }
    /**
     * Build a chessboard structure
     *
     * @param sizeX
     * @param sizeY
     */
    Chessboard.prototype.buildBoard = function (sizeX, sizeY) {
        // Create a table DOM element in memory
        var table = document.createElement('table'), row, cell;
        // Apply a chessboard class to the table
        table.className = 'chessboard';
        // Loop through the amount of rows
        for (var x = 0; x < sizeX; x++) {
            // Create an object that represents a row in matrix
            this._matrix[x] = Object.create(null);
            // Insert a DOM row into a table element
            row = table.insertRow(x);
            // Loop through the amount of columns
            for (var y = 0; y < sizeY; y++) {
                // Add a cell to matrix with an initial value of -1
                this._matrix[x][y] = -1;
                // Insert a DOM cell into a row element
                cell = row.insertCell(y);
                // Define a color of each cell
                if ((x + y) % 2) {
                    cell.className = 'chessboard__cell chessboard__cell--dark';
                }
                else {
                    cell.className = 'chessboard__cell chessboard__cell--light';
                }
            }
        }
        // Append constructed table to the DOM element
        this._canvas.appendChild(table);
    };
    Object.defineProperty(Chessboard.prototype, "matrix", {
        /**
         * Get matrix object
         */
        get: function () {
            return this._matrix;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Chessboard.prototype, "table", {
        /**
         * Get DOM table element
         */
        get: function () {
            return this._canvas.firstChild;
        },
        enumerable: true,
        configurable: true
    });
    return Chessboard;
}());
exports.Chessboard = Chessboard;
//# sourceMappingURL=Chessboard.js.map