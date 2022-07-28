import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import "./styles/style.min.css"
import Card from "./components/Card"
import data from "./data"

function Index() {
    const card = data.map(item =>{
        return(
            <Card
                img={item.imageUrl}
                title={item.title}
                location={item.location}
                maps={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
            />
        )
    })
    return(
        <div>
            <Navbar />
            {card}
        </div>
    )
}

const container = document.getElementById("root")
ReactDOM.render(<Index />, container)