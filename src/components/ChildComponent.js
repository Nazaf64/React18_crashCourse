import React from 'react';

const ChildComponent = (props) => {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent;