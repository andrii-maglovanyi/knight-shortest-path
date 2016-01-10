/**
 * Chessboard matrix is a two-dimensional structure with a keys of numbers and values of objects
 */
interface MatrixInterface {
    [key:number]: Object
}

/**
 * Class builds a chessboard DOM structure and creates a matrix, which reflects this structure
 */
class Chessboard {
    private _matrix:MatrixInterface = Object.create(null);

    /**
     *
     * @param _canvas       DOM element to append a chessboard table to
     * @param dimensions    Array with a chessboard dimensions (x, y)
     */
    constructor(private _canvas:any, dimensions:number[] ) {
        this.buildBoard(dimensions[0], dimensions[1]);
    }

    /**
     * Build a chessboard structure
     *
     * @param sizeX
     * @param sizeY
     */
    buildBoard(sizeX:number, sizeY:number): void {
        // Create a table DOM element in memory
        var table:any = document.createElement('table'),
            row:any,
            cell:any;

        // Apply a chessboard class to the table
        table.className = 'chessboard';

        // Loop through the amount of rows
        for (var x:number = 0; x < sizeX; x++) {
            // Create an object that represents a row in matrix
            this._matrix[x] = Object.create(null);
            // Insert a DOM row into a table element
            row = table.insertRow(x);

            // Loop through the amount of columns
            for (var y:number = 0; y < sizeY; y++) {
                // Add a cell to matrix with an initial value of -1
                this._matrix[x][y] = -1;
                // Insert a DOM cell into a row element
                cell = row.insertCell(y);

                // Define a color of each cell
                if ((x + y) % 2) {
                    cell.className = 'chessboard__cell chessboard__cell--dark';
                } else {
                    cell.className = 'chessboard__cell chessboard__cell--light';
                }
            }
        }

        // Append constructed table to the DOM element
        this._canvas.appendChild(table);
    }

    /**
     * Get matrix object
     */
    get matrix(): any {
        return this._matrix
    };

    /**
     * Get DOM table element
     */
    get table(): any {
        return this._canvas.firstChild;
    }
}

export { Chessboard };
