import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const greetParent = (childName) => {
        alert(`Hello Parent ${childName}`)
    }

    return <ChildComponent greetHandler={greetParent} />

    // return (
    //     <div>

    //     </div>
    // )
}

export default ParentComponent;