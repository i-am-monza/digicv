import React, { Component } from 'react';
// import main styles
import './App.css';
// import components to app
import { Div } from './components/containers/divVariety1.js';

export class App extends Component {
  render() {
    return (
      <div className="app row">
        <section className="work col-7">
          <Div
            text="trying out container"
            fontSize="20px"
            fontColour="white"
            background="orange"
            switch=".headerBoxshadowBlack"
          />
        </section>
        <section className="education col">

        </section>
      </div>
    );
  }
}