import React from 'react';
// import the components stylesheet
import './labelVariety1.css';

export const Label = props => {
    
    return (
        <label
            id="label-var-1"
            className={ props.switch }
            style={{
                fontSize: props.fontSize,
                color: props.fontColour,
                background: props.background
            }}
        >
            {props.text}
        </label>
    );
}