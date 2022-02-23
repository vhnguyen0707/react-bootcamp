import React from "react"
import ReactDOM from "react-dom"



function App(){
    const [developer, setDeveloper] = React.useState({
        language: "python",
        yearsExperience: 0,
        isEmployed: false   //always dependent on the previous state
    });

    function handleChangeLanguage(){
        setDeveloper({
            language: 'javascript',
            yearsExperience: 0,
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
    // const [language, setLanguage] = React.useState('python'); //list destructuring in js destructure state variables
    // const [yearsExperience, setYearsExperience] = React.useState(0);
    return (
        <div>
            <button onClick={handleToggleEmployment}>Chnage Employment</button>
            <button onClick={handleChangeLanguage}>Change language</button>
            <div>
                 <input 
                         type="number"
                         onChange ={handleChangeYearsExperience}
                     />
            </div>
            <p>I am learning {developer.language}</p>
            <p>I have {developer.yearsExperience} years of experience</p>
            <p>Employment status: {developer.isEmployed? "Employed":  "Unemployed"}</p>
        </div> 
     );
    //inline function to execute the function when button is clicked 
    //otherwise when Dom rendering the function is executed right away
    // return (
    //    <div>
    //        <button onClick={() => setLanguage('javascript')}>Change language</button>
    //        <div>
    //             <input 
    //                     type="number"
    //                     onChange ={event => setYearsExperience(event.target.value)}
    //                 />
    //        </div>
    //        <p>I am learning {language}</p>
    //        <p> I have {yearsExperience} years of experience</p>
    //    </div> 
    // );

}


const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode)