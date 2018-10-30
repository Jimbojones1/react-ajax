import React, { Component } from 'react';
import CrimesList from './CrimesList';
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

    // we are using a Promise, .then, wafter this function returns whatever it is returning
    // in our case crimesJson
    this.getCrimes().then((crimes) => {
      console.log(crimes, ' this is data');

      this.setState({crimes: crimes});

    }).catch((err) => {

      console.log(err);

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
  deleteCrime = (indexOfTheCrime) => {
    console.log(typeof indexOfTheCrime, ' this is the index of the crime in the app component');

    //So we are checking for the index's that don't match because those are the ones
    // that are not being deleted

    // Filter returns a brand new array for us, this along the functional paradigm,
    // we want to try to treat data as being immutable,
    // treating data as immutable we want to return new objects
    this.setState({
      crimes: this.state.crimes.filter((crime, index) => index !== parseInt(indexOfTheCrime))
    });
  }
  render() {
    return (
      <div className="App">
        <CrimesList crimes={this.state.crimes} deleteCrime={this.deleteCrime} />
      </div>
    );
  }
}

export default App;
