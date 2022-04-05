import React from 'react';

interface Props {
    pieceType: string;
}


function Piece(props: Props) {
    if (props.pieceType !== undefined) {
        return (
            <div className="piece" >
                <img src={`/assets/chess-pieces/${props.pieceType}.png`} />
            </div>
        )
    }
    else {
        return (
            <></>
        )
    }

}

export default Piece;