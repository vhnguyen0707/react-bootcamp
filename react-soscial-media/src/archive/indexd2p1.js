import React from "react"
import ReactDOM from "react-dom"



function App(){
    //rerendering; react hooks
    //const inputState = React.useState('some text');
    //const inputValue = inputState[0]; //object 0 la default
    //const setInputValue = inputState[1]; // function de set cai thu nhat

    const [inputValue, setInputValue] = React.useState('some text');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input onChange={handleInputChange}/>
            <p>{inputValue}</p>
        </div>
        
    );
}


const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode)