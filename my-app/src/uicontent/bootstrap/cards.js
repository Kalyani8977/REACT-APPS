import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (<div style={{
    display: "flex",
    flexDirection:"row",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  }}>
    <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          
          {props.data.description}
        </Card.Text>
        <Button variant="primary">{props.data.category}</Button>
      </Card.Body>
    </Card></div>
    
  );
}

export default Cards;