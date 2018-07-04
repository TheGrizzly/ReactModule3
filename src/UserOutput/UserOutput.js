import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className='Paragraphs'>
            <p>The username is {props.username}</p>
            <p>Monsieur LaPadite, I thank you for milk, and your hospitably. I do believe our business here is done. The Nazi Officer opens the front door, and silently motions for his son to approach the house.</p>
        </div>
    )
};

export default userOutput;