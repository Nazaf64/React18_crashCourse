import { useState } from 'react';
import React from 'react';

const Message = (props) => {
    const [message, setMessage] = useState('Welcome visitor');
    return (
        <div>
            <h1>{message}</h1>
            <button
            onClick={()=> setMessage('Thank you for subscribing!')}
            >Subscribe</button>
        </div>
    )
}

export default Message;
