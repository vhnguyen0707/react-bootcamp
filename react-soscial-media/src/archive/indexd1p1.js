import React from 'react';
import ReactDOM from 'react-dom';

const year = 2020;
//// single tag <div />; javascrip object {{}}
// const greeting = (<div>
//     <h1>Hello!</h1>
//     <p>Welcome to React</p>
//     </div>);

//const greeting = <button className="button">Submit</button>;

//const greeting = <button style={{ backgroundColor:"red"}}>Submit</button>;

////element name starts with uppercase
function Header(props) {
	//props obj readonly
	return <h1>Hello {props.username}</h1>;
}

function Layout(props) {
	return <div style={{ background: 'palegoldenrod' }}>{props.children}</div>;
}

function Login() {
	return <p>Please login!</p>;
}

const isAuthenticated = true;

function SignOut() {
	return <button>Sign Out</button>;
}

////arrow function
// const Header = () =>{
//     return <h1>Hello React</h1>;
// }

// class Header extends React.Component{
//     render() {
//         return <h1>Hello React</h1>;
//     }
// }

const isReactUser = true;
const rootNode = document.getElementById('root');

// function sayGreeting(){
//     if (isReactUser){
//         return greeting;
//     } else {
//         return <div>Hello Python</div>;
//     }
// }

function App() {
    return (<Layout>
		{isAuthenticated ? (
            <> 
                <Header username="john" />
                <SignOut />
            </>
        ) : (
            <Login />
        )}
		{/* {isAuthenticated && <SignOut />} */}
		<footer>Copyright 2020</footer>
	</Layout>);
}
// ReactDOM.render(sayGreeting(), rootNode);

//ReactDOM.render(<Header />, rootNode);
ReactDOM.render(<App />,rootNode);
//ReactDOM.render(<div>{Header("John")} <footer>Copyright 2020</footer></div>, rootNode);
