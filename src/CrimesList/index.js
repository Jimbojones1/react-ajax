import React, { Component } from 'react';


class CrimesList extends Component {
  handleDelete = (e) => {
    this.props.deleteCrime(e.currentTarget.id);
  }
  render(){

    // How do I render lists in React
    const crimesList = this.props.crimes.map((crime, i) => {
      return (
        <li key={i}>
          Description: {crime.description} <br/>
          Date: {crime.date} <br/>
          <button id={i} onClick={this.handleDelete}>Delete</button>
        </li>
        )
    });

    return (
      <div>
        <h4>CrimesList</h4>
        <ul>
          {crimesList}
        </ul>
      </div>
      )
  }
}


export default CrimesList;
