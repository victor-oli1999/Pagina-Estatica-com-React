import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import ReactLogo from "./images/react-logo.png"

function Nav() {
    return (
    <div className="navbar">
        <div className="react-logo">
            <img src={ReactLogo} alt="React logo" width="40px" />
            <h2>ReactFacts</h2>
        </div>
        <h3>React Course - Project 1</h3>
    </div>
    )
}
function MainContent() {
    return (
    <div className="MainContent">
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}

function App() {
    return (
    <div>
        <Nav />
        <MainContent />
    </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)