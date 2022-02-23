import React from "react"
import ReactDOM from "react-dom"



function App(){
    //mouse position
    const [mousePosition, setMousePosition] = React.useState({x:0, y:0});

    React.useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        //cancel listener
        return ()=>{
            document.removeEventListener('mousemove', handleMouseMove);
        };

    }, []);
    
    function handleMouseMove(event){
        setMousePosition({x: event.pageX, y: event.pageY});
    }
    return (
        <div>
            <p>
                X: {mousePosition.x}, Y: {mousePosition.y}
            </p>
        </div> 
     );
    }

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode)

//re render tha app with different components
function NewPage(){
    return <div> new page </div>
}

//effect stil actively listens to the mouse move even tho app is removed from the dom
setTimeout(()=> ReactDOM.render(<NewPage />, rootNode), 2000)