import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.img} width="125" height="168" />
            </div>
            <div className="card-text">
                <h3>{props.title}</h3>
                <h5>{props.location}</h5>
                <h5>{props.maps}</h5>
                <h5>{props.startDate}</h5>
                <h5>{props.endDate}</h5>
                <h5>{props.description}</h5>
            </div>
        </div>
    )
}