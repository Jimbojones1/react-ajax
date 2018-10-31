import React from 'react';
import { Header, Card, Icon, Transition } from 'semantic-ui-react';

const CrimesList = (props) => {
      // How do I render lists in React
    const crimesList = props.crimes.map((crime, i) => {
      return (

          <Card color='red' key={crime.id} style={{maxWidth: 300}} >
            <Card.Header textAlign='right'><Icon name='delete' onClick={props.deleteCrime.bind(null, crime.id)}/></Card.Header>
            <Card.Content>
              <Card.Header>Date: {crime.date}</Card.Header>
              <Card.Description>{crime.description}</Card.Description>
            </Card.Content>
          </Card>


        )
    });

    return (
      <div>
        <Header as='h2' size="huge" >CrimesList</Header>
        <Transition.Group duration={200} animation={'fly up'} as={Card.Group} children={crimesList}></Transition.Group>
      </div>
      )
}




export default CrimesList;
