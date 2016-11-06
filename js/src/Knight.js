"use strict";
/**
 * Knight describes moves it can make from current position
 */
var Knight = (function () {
    function Knight() {
        this._possibleMoves = {
            x: [-1, 1, -2, 2, -2, 2, -1, 1],
            y: [-2, -2, -1, -1, 1, 1, 2, 2]
        };
    }
    Object.defineProperty(Knight.prototype, "possibleMoves", {
        get: function () {
            return this._possibleMoves;
        },
        enumerable: true,
        configurable: true
    });
    return Knight;
}());
exports.Knight = Knight;
//# sourceMappingURL=Knight.js.map