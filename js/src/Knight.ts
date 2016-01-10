interface ChessPieceInterface {
    possibleMoves: Object;
}

/**
 * Knight describes moves it can make from current position
 */
class Knight implements ChessPieceInterface {
    private _possibleMoves: Object = {
        x: [-1, 1, -2, 2, -2, 2, -1, 1],
        y: [-2, -2, -1, -1, 1, 1, 2, 2]
    }

    get possibleMoves() {
        return this._possibleMoves;
    }
}

export { Knight, ChessPieceInterface };
