import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"

function Index() {
    return(
        <div>
            <Navbar />
        </div>
    )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)

root.render(<Index />)