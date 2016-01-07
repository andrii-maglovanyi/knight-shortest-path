import { ChessPieceInterface } from "./Knight";

/**
 * Find the shortest path with a Dijkstra's algorithm.
 */
class PathFinder {
    // amount of steps in a shortest pat
    amountOfMoves:number;

    // multidimensional array of starting and finishing coordinates
    startAndFinishPoints:number[][] = [];

    // list of coordinates relations form step to step
    coordinates:Object = Object.create(null);

    constructor(public matrix:Object, public table:any, public piece:ChessPieceInterface) {
        for (var x: number = 0, row: any; row = table.rows[x]; x++) {
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            for (var y: number = 0, col: any; col = row.cells[y]; y++) {
                //iterate through columns
                //columns would be accessed using the "col" variable assigned in the for loop
                var self = this;
                col.onclick = (function (x:number, y:number) {
                    return function () {
                        self.run(x, y);
                    }
                }(y, x));
            }
        }
    }

    /**
     * Return array of all coordinates, reachable from the current position
     *
     * @param iX    Initial x coordinate
     * @param iY    Initial y coordinate
     * @param fX    Searched x coordinate
     * @param fY    Searched y coordinate
     * @param count Number of steps made so far
     *
     * @returns {number[][]}
     */
    listMoves(iX: number, iY: number, fX: number, fY: number, count: number): number[][] {
        // Array off coordinates arrays which were made on path searching
        var steps: number[][] = [];

        // Mark matrix cell with a current step
        this.matrix[iX][iY] = count;

        for (var step = 0; step < this.piece.possibleMoves['y'].length; step++) {
            var currentX = iX + this.piece.possibleMoves['x'][step];
            var currentY = iY + this.piece.possibleMoves['y'][step];

            // If step has not gone beyond limits and the cell has not been used
            if (currentX >= 0 && currentX < 8 && currentY >= 0 && currentY < 8 && this.matrix[currentX][currentY] == -1) {
                // If step matches the goal
                if (currentX == fX && currentY == fY) {
                    // Write count of steps to the cell
                    this.table.rows[currentY].cells[currentX].innerHTML = count;
                    this.coordinates[count] = iX + '_' + iY;
                    this.amountOfMoves = count;
                }

                this.coordinates[currentX + '_' + currentY] = iX + '_' + iY;
                this.matrix[currentX][currentY] = count;
                steps.push([currentX, currentY]);
            }
        }

        return steps;
    }

    /**
     * Recursive search.
     * List all possible moves from current position, than move to the next position in the list and
     * do the same until searched coordinate is reached.
     *
     * @param fX    Searched x coordinate
     * @param fY    Searched y coordinate
     * @param count Number of steps made so far
     * @param steps List of coordinates to perform the moves from
     */
    next(fX: number, fY: number, count: number, steps: number[][]): void {
        var _steps: number[][] = [];
        for (var i = 0; i < steps.length; i++) {
            _steps = _steps.concat(this.listMoves(steps[i][0], steps[i][1], fX, fY, count + 1));
        }

        if (_steps.length) {
            this.next(fX, fY, count + 1, _steps)
        }
    }

    /**
     * Initial possible moves lookup
     *
     * @param iX    Initial x coordinate
     * @param iY    Initial y coordinate
     * @param fX    Searched x coordinate
     * @param fY    Searched y coordinate
     */
    findShortestPath(iX: number, iY: number, fX: number, fY:number):void {
        var steps = this.listMoves(iX, iY, fX, fY, 1);
        this.next(fX, fY, 1, steps);
    }

    /**
     * Recursive tracing of path from starting to finishing position
     *
     * @param array
     * @param index
     * @param txt
     */
    trace(array:Object, index: number, txt:String):void {
        if (array[index]) {
            var coordinates = array[index].split('_');
            if (!this.table.rows[coordinates[1]].cells[coordinates[0]].innerHTML) {
                this.table.rows[coordinates[1]].cells[coordinates[0]].innerHTML = txt;
            }

            return this.trace(array, array[index], txt)
        }
    }

    /**
     * Store coordinates and fire a search when all data is provided
     *
     * @param x
     * @param y
     */
    run(x:number, y:number): void {
        // Add coordinates to the array
        this.startAndFinishPoints.push([x, y]);

        if (this.startAndFinishPoints.length == 2) {
            // If start and finish positions present - start search loop
            this.findShortestPath(this.startAndFinishPoints[0][0], this.startAndFinishPoints[0][1], this.startAndFinishPoints[1][0], this.startAndFinishPoints[1][1]);
            this.trace(this.coordinates, this.amountOfMoves, '&bull;');

            // clear coordinates array for listening a new input
            this.startAndFinishPoints = [];
        } else if (this.startAndFinishPoints.length == 1) {
            // if starting position is set - prepare internal parameters for a new search
            this.coordinates = {};
            this.amountOfMoves = 0;

            // prepare matrix and clear DOM table for a new search
            for (var i in this.matrix) {
                for (var n in this.matrix[i]) {
                    this.table.rows[i].cells[n].innerHTML = '';
                    this.matrix[i][n] = -1;
                }
            }

            // initial table cell marked as a zero step
            this.table.rows[y].cells[x].innerHTML = 0;
        }
    }
}

export { PathFinder }
