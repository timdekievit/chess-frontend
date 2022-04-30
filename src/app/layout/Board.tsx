import Square from "./Square";


function Board() {

    let squares = [];

    squares.push(<Square position={'a8'} color="#ffcc00" pieceType="rook-black" />)
    squares.push(<Square position={'b8'} color="#663300" pieceType="knight-black" />)
    squares.push(<Square position={'c8'} color="#ffcc00" pieceType="bishop-black" />)
    squares.push(<Square position={'d8'} color="#663300" pieceType="queen-black" />)
    squares.push(<Square position={'e8'} color="#ffcc00" pieceType="king-black" />)
    squares.push(<Square position={'f8'} color="#663300" pieceType="bishop-black" />)
    squares.push(<Square position={'g8'} color="#ffcc00" pieceType="knight-black" />)
    squares.push(<Square position={'h8'} color="#663300" pieceType="rook-black" />)

    squares.push(<Square position={'a7'} color="#663300" pieceType="pawn-black" />)
    squares.push(<Square position={'b7'} color="#ffcc00" pieceType="pawn-black" />)
    squares.push(<Square position={'c7'} color="#663300" pieceType="pawn-black" />)
    squares.push(<Square position={'d7'} color="#ffcc00" pieceType="pawn-black" />)
    squares.push(<Square position={'e7'} color="#663300" pieceType="pawn-black" />)
    squares.push(<Square position={'f7'} color="#ffcc00" pieceType="pawn-black" />)
    squares.push(<Square position={'g7'} color="#663300" pieceType="pawn-black" />)
    squares.push(<Square position={'h7'} color="#ffcc00" pieceType="pawn-black" />)

    squares.push(<Square position={'a6'} color="#ffcc00" />)
    squares.push(<Square position={'b6'} color="#663300" />)
    squares.push(<Square position={'c6'} color="#ffcc00" />)
    squares.push(<Square position={'d6'} color="#663300" />)
    squares.push(<Square position={'e6'} color="#ffcc00" />)
    squares.push(<Square position={'f6'} color="#663300" />)
    squares.push(<Square position={'g6'} color="#ffcc00" />)
    squares.push(<Square position={'h6'} color="#663300" />)

    squares.push(<Square position={'a5'} color="#663300" />)
    squares.push(<Square position={'b5'} color="#ffcc00" />)
    squares.push(<Square position={'c5'} color="#663300" />)
    squares.push(<Square position={'d5'} color="#ffcc00" />)
    squares.push(<Square position={'e5'} color="#663300" />)
    squares.push(<Square position={'f5'} color="#ffcc00" />)
    squares.push(<Square position={'g5'} color="#663300" />)
    squares.push(<Square position={'h5'} color="#ffcc00" />)

    squares.push(<Square position={'a4'} color="#ffcc00" />)
    squares.push(<Square position={'b4'} color="#663300" />)
    squares.push(<Square position={'c4'} color="#ffcc00" />)
    squares.push(<Square position={'d4'} color="#663300" />)
    squares.push(<Square position={'e4'} color="#ffcc00" />)
    squares.push(<Square position={'f4'} color="#663300" />)
    squares.push(<Square position={'g4'} color="#ffcc00" />)
    squares.push(<Square position={'h4'} color="#663300" />)

    squares.push(<Square position={'a3'} color="#663300" />)
    squares.push(<Square position={'b3'} color="#ffcc00" />)
    squares.push(<Square position={'c3'} color="#663300" />)
    squares.push(<Square position={'d3'} color="#ffcc00" />)
    squares.push(<Square position={'e3'} color="#663300" />)
    squares.push(<Square position={'f3'} color="#ffcc00" />)
    squares.push(<Square position={'g3'} color="#663300" />)
    squares.push(<Square position={'h3'} color="#ffcc00" />)

    squares.push(<Square position={'a2'} color="#ffcc00" pieceType="pawn-white" />)
    squares.push(<Square position={'b2'} color="#663300" pieceType="pawn-white" />)
    squares.push(<Square position={'c2'} color="#ffcc00" pieceType="pawn-white" />)
    squares.push(<Square position={'d2'} color="#663300" pieceType="pawn-white" />)
    squares.push(<Square position={'e2'} color="#ffcc00" pieceType="pawn-white" />)
    squares.push(<Square position={'f2'} color="#663300" pieceType="pawn-white" />)
    squares.push(<Square position={'g2'} color="#ffcc00" pieceType="pawn-white" />)
    squares.push(<Square position={'h2'} color="#663300" pieceType="pawn-white" />)

    squares.push(<Square position={'a1'} color="#663300" pieceType="rook-white" />)
    squares.push(<Square position={'b1'} color="#ffcc00" pieceType="knight-white" />)
    squares.push(<Square position={'c1'} color="#663300" pieceType="bishop-white" />)
    squares.push(<Square position={'d1'} color="#ffcc00" pieceType="queen-white" />)
    squares.push(<Square position={'e1'} color="#663300" pieceType="king-white" />)
    squares.push(<Square position={'f1'} color="#ffcc00" pieceType="bishop-white" />)
    squares.push(<Square position={'g1'} color="#663300" pieceType="knight-white" />)
    squares.push(<Square position={'h1'} color="#ffcc00" pieceType="rook-white" />)



    // for (let row = 0; row < 8; row++) {

    //     for (let index = 0; index < 8; index++) {

    //         if (index % 2 === 0 && row % 2 === 0) {
    //             if(index === 0 && row === 0) {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#ffcc00" pieceType="rook-black" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1) + 1} color="#663300" pieceType="knight-black"/>)
    //             }
    //             else if (index === 2 && row === 0) {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#ffcc00" pieceType="bishop-black" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1)+ 1} color="#663300" pieceType="queen-black"/>)
    //             }
    //             else if (index === 4 && row === 0) {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#ffcc00" pieceType="king-black" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1) + 1} color="#663300" pieceType="bishop-black"/>)
    //             }
    //             else if (index === 6 && row === 0) {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#ffcc00" pieceType="knight-black" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1) + 1} color="#663300" pieceType="rook-black"/>)
    //             }
    //             else if (row === 6) {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#ffcc00" pieceType="pawn-white" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1) + 1} color="#663300" pieceType="pawn-white" />)
    //             }
    //             else {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#ffcc00" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1)+ 1} color="#663300" />)
    //             }
    //         }
    //         else if (index % 2 === 1 && row % 2 === 1) {
    //             if(row === 1) {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#663300" pieceType="pawn-black" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1)+ 1} color="#ffcc00" pieceType="pawn-black"/>)
    //             }
    //             else if(index === 1 && row === 7) {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#663300" pieceType="rook-white" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1) + 1} color="#ffcc00" pieceType="knight-white"/>)
    //             }
    //             else if (index === 3 && row === 7) {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#663300" pieceType="bishop-white" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1) + 1} color="#ffcc00" pieceType="queen-white"/>)
    //             }
    //             else if (index === 5 && row === 7) {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#663300" pieceType="king-white" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1) + 1} color="#ffcc00" pieceType="bishop-white"/>)
    //             }
    //             else if (index === 7 && row === 7) {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#663300" pieceType="knight-white" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1) + 1} color="#ffcc00" pieceType="rook-white"/>)
    //             }
    //             else if (row === 6) {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#663300" pieceType="pawn-white" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1) + 1} color="#ffcc00" pieceType="pawn-white" />)
    //             }
    //             else {
    //                 squares.push(<Square position={(index + 1) * (row + 1)} color="#663300" />)
    //                 squares.push(<Square position={(index + 1) * (row + 1) + 1} color="#ffcc00" />)
    //             }
    //         }
    //     }

    // }
    return (

        <section className="grid-container">
            {squares}
        </section>

    );
}

export default Board;