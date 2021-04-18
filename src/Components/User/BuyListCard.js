import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const BuyListCard = ({order}) => {
    const {ServiceTitle,imageURL,Status}=order; 
    return (
        <div>
            <Col>
            <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={imageURL} />
       <Card.Body>
         <Card.Title>{ServiceTitle}</Card.Title>
         <label>{Status}</label>
     <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
     </Card.Text>
     
    </Card.Body>
</Card>
</Col>
        </div>
    );
};

export default BuyListCard;