import React from 'react';

const UserGreeting = () => {
    const isLoggedIn = false;

    return (
        <div>
            {/* Welcome {isLoggedIn ? 'User' : ''} */}
            Welcome {isLoggedIn && "User"}
        </div>
    )
}

export default UserGreeting;