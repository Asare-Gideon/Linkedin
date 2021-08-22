import React from 'react'
import "./inputOption.css";


function InputOption({Icon, text,iconColor}) {
    return (
        <div className="input-option">
            {Icon && <Icon  style={{color : iconColor}} />}
            <h4>{text}</h4>
        </div>
    )
}

export default InputOption
