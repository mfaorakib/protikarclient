import React from 'react';
import { Button, Card,Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ServiceCard = ({ Service }) => {
  const {imageURL, ServiceTitle, Description, _id} = Service;
  const history = useHistory()

    const handleAddCart=(id)=>{
        
        history.push('/BuyServices/'+id )  

    }
    
     return (
        <Col style={{paddingTop:'20px',}}>
             <Card style={{ width: '18rem',height:'300px'}}>
                <Card.Img style={{height:'60px',width:'100px'}} variant="top" src={Service.imageURL} alt="hele" />
                <Card.Body>
                    <Card.Title>{Service.ServiceTitle}</Card.Title>
                    <Card.Text>
                    {Service.Description}
                   </Card.Text>
                   <p>${Service.Price}</p>
                    <Button  onClick={()=>handleAddCart(_id)}  variant="primary"> See Details</Button>
                </Card.Body>
            </Card> 
  </Col>

    );
};

export default ServiceCard;