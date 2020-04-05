import React, { Component } from 'react';
// import main styles
import './App.css';
// import components to app
import { Button } from './components/buttons/buttonVariety1.js';

export class App extends Component {
  render() {
    return (
      <div className="app row">
        <section className="work col-7">
          <Button
            text="trying out button"
            fontSize="20px"
            fontColour="white"
            background="blue"
            top_background="blue"
            bottom_background="turquoise"
            boxShadow="black"
            borderColour="blue"
            textShadow="black"
            switch='button-circular-height'
          />
        </section>
        <section className="education col">

        </section>
      </div>
    );
  }
}