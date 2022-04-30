import React from 'react';
import Draggable from 'react-draggable';

interface Props {
    pieceType: string;
}


function Piece(props: Props) {
    if (props.pieceType !== undefined) {
        return (
            <Draggable>
                <div className="piece" >
                    <img src={`/assets/chess-pieces/${props.pieceType}.png`} />
                </div>
            </Draggable>
        )
    }
    else {
        return (
            <></>
        )
    }

}

export default Piece;