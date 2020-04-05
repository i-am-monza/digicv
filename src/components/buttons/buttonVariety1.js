import React from 'react';
// import the components stylesheet
import './buttonVariety1.css';

export const Button = props => {
    
    return (
        <button
            id="button-var-1"
            className={ props.switch }
            style={{
                fontSize: props.fontSize,
                color: props.fontColour,
                background: props.background
            }}
        >
            {props.text}
        </button>
    );
}