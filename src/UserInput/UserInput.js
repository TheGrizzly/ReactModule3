import React from 'react';

const userInput = (props) => {
    const styleinput = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid #eee',
        padding: '10px'
    }
    
    return(
        <div>
            <input style={styleinput} type="text" onChange={props.changed} value={props.username} />
        </div>
    )
};

export default userInput;