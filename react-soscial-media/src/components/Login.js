import React from "react";


function Login({ setUser }) { //(props.setUser)
    const [username, setUsername] = React.useState('');

    function handleSubmit(event){
        event.preventDefault();
        setUser(username);
    }

    return (<div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input onChange={event=>setUsername(event.target.value)} placeholder="Input Usename"/>
            <button type="submit"> Submit</button>
        </form>
    </div>);
}

export default Login;