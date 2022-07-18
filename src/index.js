import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import "./styles/style.css"

function Index() {
    return(
        <div>
            <Navbar />
        </div>
    )
}

const container = document.getElementById("root")
ReactDOM.render(<Index />, container)