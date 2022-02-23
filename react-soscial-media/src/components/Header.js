import React from "react";


function Header({ user, setUser }) {
    // greet our user
    return (<div>
        Welcome, {user}!
        <button onClick={() => setUser('')}>Logout</button>

    </div>);
}

export default Header;