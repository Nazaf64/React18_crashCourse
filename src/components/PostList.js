import React, { useState, useEffect } from 'react';

const PostList = () => {
    const [posts, setPosts] = useState([])
    
    // useEffect is a hook that you can use to make side effects in your components
    // The side effect in this example is an API request

    // useEffect runs everytime the component renders
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch((err) => {
            console.log(err)
        })
    }, [])  // ADDING THE EMPTY ARRAY causes the useEffect hook to run only once (during the first render only)
    // The Array is a list of dependencies on which this 'effect' hook depends on
    
    return (
        <div>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>{post.title}</li>
                    )
                })}
            </ul>
            
        </div>
    )
}

export default PostList;