import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// https://data.cityofchicago.org/resource/crimes.json
class App extends Component {
  constructor(){
    super();

    this.state = {
      crimes: []
    }
  }
  getCrimes = async () => {

    try{
      // By default fetch is making GET request
      const crimes = await fetch('https://data.cityofchicago.org/resource/crimes.json');
      // The response from api's is in JSON, notice the end of the crimes.json
      // so we have to parse that into a regular object so we can use it.
      const crimesJson = await crimes.json();
      return crimesJson

    } catch(err){
      return err
    }

  }

  componentDidMount(){

    this.getCrimes().then((data) => {
      console.log(data, ' this is data');
    });

    // componentDidMount, like render, and constructor are part of the component lifectyle,
    // that means these functions get called automatically

    // ComponentDidMount is where you will make any get requests, set up sockets (chat room),
    // set up firebase (direct db)

    // ComponentDidMount represents is when the component is actually mounted on to the
    // DOM

    // This is where we make get requests if we want are data to be loaded on the page
    // immediatly
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
