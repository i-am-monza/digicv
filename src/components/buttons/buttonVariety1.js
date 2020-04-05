import React from 'react';
// import the components stylesheet
import './buttonVariety1.css';

export const Button = props => {
    
    return (
        <a
            id="button-var-1"
            className={ props.switch }
            style={{
                fontSize: props.fontSize,
                color: props.fontColour,
                backgroundColor:  `${props.background}`,
                background:`linear-gradient(to bottom, ${props.top_background} 5%, ${props.bottom_background} 100%)`,
                boxShadow: `3px 4px 0px 0px ${props.boxShadow}`,
                border:`1px solid ${props.borderColour}`,
                textShadow:`0px 1px 0px ${props.textShadow}`,

            }}
        >
            {props.text}
        </a>
    );
}