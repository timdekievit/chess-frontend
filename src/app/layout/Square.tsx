import React from 'react';
import Piece from './Piece';

interface Props {
    color: string;
    pieceType?: string;
}


function Square(props: Props) {
    return (
        <div style={{backgroundColor: props.color}} className="square" >
            <Piece pieceType={props.pieceType!}/>
        </div>
    )
}

export default Square;