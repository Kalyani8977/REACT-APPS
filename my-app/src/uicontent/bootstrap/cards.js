import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          
          {props.data.description}
        </Card.Text>
        <Button variant="primary">{props.data.category}</Button>
      </Card.Body>
    </Card>
    
  );
}

export default Cards;