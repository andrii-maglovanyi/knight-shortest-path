"use strict";
var Chessboard_1 = require("./Chessboard");
var Knight_1 = require("./Knight");
var PathFinder_1 = require("./PathFinder");
var chessboard = new Chessboard_1.Chessboard(document.getElementById("board"), [8, 8]);
new PathFinder_1.PathFinder(chessboard.matrix, chessboard.table, new Knight_1.Knight());
//# sourceMappingURL=index.js.map