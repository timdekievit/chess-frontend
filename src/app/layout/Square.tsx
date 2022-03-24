import React from 'react';

interface Props {
    color: string;
}


function Square(props: Props) {
    return (
        <div style={{backgroundColor: props.color}} className="square" >

        </div>
    )
}

export default Square;