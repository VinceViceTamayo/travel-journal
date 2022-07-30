import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return (
        <nav>
            <FontAwesomeIcon icon={faEarthAsia} />
            <h4>My Travel Journal</h4>
        </nav>
    )
}