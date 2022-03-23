export interface Board {
    squares: Square[];
}

export interface Square {
    position: string;
    piece: Piece;
}

export interface Piece {
    type: PieceTypes;
    color: Colortypes;
}

export enum PieceTypes {
    Bishop,
    Knight,
    King,
    Queen,
    Pawn,
    Rook,
    None
}

export enum Colortypes {
    White,
    Black
}