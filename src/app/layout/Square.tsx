import React from 'react';
import Piece from './Piece';

interface Props {
    position: string;
    color: string;
    pieceType?: string;
}


function Square(props: Props) {
    return (
        <div style={{backgroundColor: props.color}} className="square" >
            <Piece pieceType={props.pieceType!}/>
            {/* <p>{props.position}</p> */}
        </div>
    )
}

export default Square;