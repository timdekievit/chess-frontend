import Square from "./Square";


function Board() {

    let squares = [];
    for (let row = 0; row < 8; row++) {

        for (let index = 0; index < 8; index++) {
            if (index % 2 === 0 && row % 2 === 0) {
                squares.push(<Square color="gray" />)
                squares.push(<Square color="black" />)
            }
            else if (index % 2 === 1 && row % 2 === 1) {
                squares.push(<Square color="black" />)
                squares.push(<Square color="gray" />)
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