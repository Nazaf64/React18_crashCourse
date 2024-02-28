import React, { useState } from 'react';

const PostForm = () => {

    const [userID, setUserID] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const submitHandler = (event) => {
        event.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userID: userID,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
    }

    return (
        <form onSubmit={submitHandler}>
            {/* USER ID */}
            <div>
                <input type="text" placeholder="User ID" value={userID} onChange={(event)=> setUserID(event.target.value)} />
            </div>

            {/* TITLE */}
            <div>
                <input type="text" placeholder="Title" value={title} onChange={(event)=> setTitle(event.target.value)} />
            </div>

            {/* BODY */}
            <div>
                <input type="text" placeholder="Body" value={body} onChange={(event)=> setBody(event.target.value)} />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default PostForm;