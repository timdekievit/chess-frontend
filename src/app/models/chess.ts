import { Board } from "./board";
import { User } from "./user";

export interface Chess {
    white: User;
    black: User;
    board: Board;
    pgn: string;

}