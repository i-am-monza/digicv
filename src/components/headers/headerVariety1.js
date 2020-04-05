import React from 'react';
// import the components stylesheet
import './headerVariety1.css';

export const Header = props => {
    
    return (
        <header
            id="head-var-1"
            className={ props.switch }
            style={{
                fontSize: props.fontSize,
                color: props.fontColour,
                background: props.background
            }}
        >
            {props.text}
        </header>
    );
}