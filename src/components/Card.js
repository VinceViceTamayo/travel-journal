import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.img} width="125" height="168" />
            </div>
            <div className="card-text">
                <div className="card-location">
                    <FontAwesomeIcon icon={faLocationDot} className="fontawesome-location" />
                    <h5 className="text-location">{props.location}</h5>
                    <a href={props.maps} target="_blank" className="maps-link">View on Google Maps</a>
                </div>
                <h3 className="card-title">{props.title}</h3>
                <div className="card-dates">
                    <h5>{props.startDate} -</h5>
                    <h5>{props.endDate}</h5>
                </div>
                <p className="card-desc">{props.description}</p>
            </div>
        </div>
    )
}