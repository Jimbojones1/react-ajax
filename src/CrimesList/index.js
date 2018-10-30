import React from 'react';

// Functional Components! these are components don't have state
// Truly a dumb component,
// it just renders UI
const CrimesList = (props) => {

  const crimesList = props.crimes.map((crime, i) => {
      return (
        <li key={i}>
          Description: {crime.description} <br/>
          Date: {crime.date} <br/>
          <button id={i} onClick={props.deleteCrime.bind(null, i)}>Delete</button>
        </li>
        )
    });

  // What we are returning from the function
  return (
      <div>
        <h4>CrimesList</h4>
        <ul>
          {crimesList}
        </ul>
      </div>
    )

};






export default CrimesList;
