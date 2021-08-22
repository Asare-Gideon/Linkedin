import React from 'react'
import "./Widget.css";
import  InfoIcon from '@material-ui/icons/Info';
import  FiberManual  from '@material-ui/icons/FiberManualRecord';


const Article = (heading , subtitle) => (
    <div className="widget-article">
        <div className="article-left">
            <FiberManual />
        </div>
        <div className="article-right">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
)

function Widget() {
    return (
        <div className="widget">
            <div className="widget-header">
                <h2>Linkedin links</h2>
                <InfoIcon />
            </div>
            
               
            { Article("New software jop is available", "Top American remote ") }
            { Article("New software jop is available", "Top American remote ") }
            { Article("New software jop is available", "Top American remote ") }
            { Article("New software jop is available here", "Top American remote ") }
            { Article("New software jop ", " remote work") }
            
        </div>
    )
}

export default Widget
