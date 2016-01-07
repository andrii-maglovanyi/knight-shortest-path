interface ChessPieceInterface {
    possibleMoves: Object;
}

/**
 * Knight describes moves it can make from current position
 */
class Knight implements ChessPieceInterface {
    possibleMoves = {
        x: [-1, 1, -2, 2, -2, 2, -1, 1],
        y: [-2, -2, -1, -1, 1, 1, 2, 2]
    }
}

export { Knight, ChessPieceInterface };
