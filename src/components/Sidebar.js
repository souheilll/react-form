import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";


const sideContainer = {
    width: '200px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    top: '0',
    paddingTop: '250px',
    backgroundColor: '#282c34',
    color: 'white',
    fontStyle: 'italic',
}
const blc = {
    display: 'flex',
    justtifyContent: 'spaceAround',
    alignItems: 'center',
}



function Sidebar() {
    return (
        <div style={sideContainer}>

            <div className="bloc" style={blc}>
                <h1 style={{ padding: '10px' }}>Users</h1>
                <h2> <FaUser /> </h2>
            </div>
            <div className="bloc" style={blc}>
                <h1 style={{ padding: '10px' }}>Projects</h1>
                <h2> <RiProjectorFill /> </h2>
            </div>
            <div className="bloc" style={blc}>
                <h1 style={{ padding: '10px' }}>Contact</h1>
                <h2> <GiRotaryPhone /> </h2>
            </div>


        </div>
    )
}

export default Sidebar