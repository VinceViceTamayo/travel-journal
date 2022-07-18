import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return (
        <nav>
            <FontAwesomeIcon icon={faGlobe} />
            <h4>My Travel Journal</h4>
        </nav>
    )
}