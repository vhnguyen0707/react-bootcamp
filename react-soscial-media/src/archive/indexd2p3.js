import React from "react"
import ReactDOM from "react-dom"



function App(){
    const [developer, setDeveloper] = React.useState({
        name: "",
        language: "python",
        yearsExperience: 0,
        isEmployed: false   //always dependent on the previous state
    });

    React.useEffect(() => { //interact with external APIs or DOM maybe change title
        document.title = developer.name;
        console.log("runs") //runs even when other state is changed since useEffect always runs when state is changed
    }, [developer.name]); //conditionally run effect function, include in [] whatever function you want to be in sync 

    function handleChangeLanguage(){
        setDeveloper({
            language: 'javascript',
            yearsExperience: 0,
        })
    }

    function handleChangeName(event){
        setDeveloper({
            ...developer,
            name: event.target.value,
        })
    }

    function handleChangeYearsExperience(event){
        setDeveloper({
            ...developer, //spread operator: lay 1 previous dict state roi thay bang cai dang sau
           yearsExperience: event.target.value
           })
    }

    function handleToggleEmployment(){
        setDeveloper((prevState) => ({
            ...prevState, //same as previous developer obj
            isEmployed: !developer.isEmployed   //state update is asynchronous
        }));
    }
    
    return (
        <div>
            <button onClick={handleToggleEmployment}>Toggle Employment Status</button>
            <button onClick={handleChangeLanguage}>Change language</button>
            <div>
                 <input 
                         type="number"
                         onChange ={handleChangeYearsExperience}
                     />
            </div>
            <div>
                <input type="text" onChange={handleChangeName} placeholder="Name"/>
            </div>
            <p>I am learning {developer.language}</p>
            <p>I have {developer.yearsExperience} years of experience</p>
            <p>Employment status: {developer.isEmployed? "Employed":  "Unemployed"}</p>
        </div> 
     );
    }

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode)