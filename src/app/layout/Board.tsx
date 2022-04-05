import Square from "./Square";


function Board() {

    let squares = [];
    for (let row = 0; row < 8; row++) {

        for (let index = 0; index < 8; index++) {

            if (index % 2 === 0 && row % 2 === 0) {
                if(index === 0 && row === 0) {
                    squares.push(<Square color="#ffcc00" pieceType="rook-black" />)
                    squares.push(<Square color="#663300" pieceType="knight-black"/>)
                }
                else if (index === 2 && row === 0) {
                    squares.push(<Square color="#ffcc00" pieceType="bishop-black" />)
                    squares.push(<Square color="#663300" pieceType="queen-black"/>)
                }
                else if (index === 4 && row === 0) {
                    squares.push(<Square color="#ffcc00" pieceType="king-black" />)
                    squares.push(<Square color="#663300" pieceType="bishop-black"/>)
                }
                else if (index === 6 && row === 0) {
                    squares.push(<Square color="#ffcc00" pieceType="knight-black" />)
                    squares.push(<Square color="#663300" pieceType="rook-black"/>)
                }
                else if (row === 6) {
                    squares.push(<Square color="#ffcc00" pieceType="pawn-white" />)
                    squares.push(<Square color="#663300" pieceType="pawn-white" />)
                }
                else {
                    squares.push(<Square color="#ffcc00" />)
                    squares.push(<Square color="#663300" />)
                }
            }
            else if (index % 2 === 1 && row % 2 === 1) {
                if(row === 1) {
                    squares.push(<Square color="#663300" pieceType="pawn-black" />)
                    squares.push(<Square color="#ffcc00" pieceType="pawn-black"/>)
                }
                else if(index === 1 && row === 7) {
                    squares.push(<Square color="#663300" pieceType="rook-white" />)
                    squares.push(<Square color="#ffcc00" pieceType="knight-white"/>)
                }
                else if (index === 3 && row === 7) {
                    squares.push(<Square color="#663300" pieceType="bishop-white" />)
                    squares.push(<Square color="#ffcc00" pieceType="queen-white"/>)
                }
                else if (index === 5 && row === 7) {
                    squares.push(<Square color="#663300" pieceType="king-white" />)
                    squares.push(<Square color="#ffcc00" pieceType="bishop-white"/>)
                }
                else if (index === 7 && row === 7) {
                    squares.push(<Square color="#663300" pieceType="knight-white" />)
                    squares.push(<Square color="#ffcc00" pieceType="rook-white"/>)
                }
                else if (row === 6) {
                    squares.push(<Square color="#663300" pieceType="pawn-white" />)
                    squares.push(<Square color="#ffcc00" pieceType="pawn-white" />)
                }
                else {
                    squares.push(<Square color="#663300" />)
                    squares.push(<Square color="#ffcc00" />)
                }
            }
        }

    }
    return (

        <section className="grid-container">
            {squares}
        </section>

    );
}

export default Board;