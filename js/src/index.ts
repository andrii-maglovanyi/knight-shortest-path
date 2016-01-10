import { Chessboard } from "./Chessboard";
import { Knight } from "./Knight";
import { PathFinder } from "./PathFinder";

var chessboard = new Chessboard(document.getElementById("board"), [8, 8]);
new PathFinder(chessboard.matrix, chessboard.table, new Knight());
