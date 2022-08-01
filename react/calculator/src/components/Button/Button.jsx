import React from "react";
import "./Button.css"

export default (props) => {
        let classes = ""
        classes += props.double ? "double " : "";
        classes += props.triple ? "triple " : "";
        classes += props.operation ? "operation " : "";
        
        return (
                <button 
                onClick={e => props.click(props.label)}
                className={`${classes}`}>{props.label}</button>
        )    
}
        