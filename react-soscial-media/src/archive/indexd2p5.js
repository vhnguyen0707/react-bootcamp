import React from "react"
import ReactDOM from "react-dom"

//fetch github api
const baseUrl= 'https://api.github.com/users/';

function App(){
    const [username, setUsername] = React.useState('vhnguyen0707');
    const [user, setUser] = React.useState(null);
    const searchInput = React.useRef();
    // React.useEffect(()=> {
    //     fetch(endpoint)
    //         .then(response => response.json()) //promise pattern
    //         .then(data => setUser(data));
    // }, []);

    async function getUser() {
        const response = await fetch(`${baseUrl}${username}`);
        const data = await response.json();
        setUser(data);
    }

    React.useEffect(()=> {
        getUser();
    }, []);

    function handleClearInput() {
        searchInput.current.value = "";
        searchInput.current.focus(); //focus cursor after clearing
    }
    // search onclick={getUser} cung duoc boi vi function o ngoai
    return <div>
    <input type="text" placeholder="input username" 
        onChange={event=> setUsername(event.target.value)} ref={searchInput} />
    <button onClick={()=> getUser()}>Search</button> 
    <button onClick={handleClearInput}>Clear</button>
    {user ? (
        <div>

            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <img alt="avatar" src={user.avatar_url} style={{ height: 50}}/>
        </div>
    ) : <p>loading</p>
    }
    </div>
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode)

