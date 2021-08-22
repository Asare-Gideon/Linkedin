import { Opacity } from '@material-ui/icons'
import React from 'react'
import "./Alert.css"

function Alert({message, top, left ,bottom, right, toggle}) {
    return (
        <div className="alert" style={{left: left, right:right, top: top, bottom: bottom,visibility: toggle }}>
            <p className="msg">{message} </p>
        </div>
    )
}

export default Alert
