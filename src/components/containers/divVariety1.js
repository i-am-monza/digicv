import React from 'react';
// import the components stylesheet
import './divVariety1.css';

export const Div = props => {
    
    return (
        <div
            id="div-var-1"
            className={ props.switch }
            style={{
                fontSize: props.fontSize,
                color: props.fontColour,
                background: props.background
            }}
        >
            {props.text}
        </div>
    );
}