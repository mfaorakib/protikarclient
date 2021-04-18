import React from 'react';
import {   Card,   } from 'react-bootstrap';
import {  Col } from 'react-bootstrap';
 
const TestimonialDetails = ({Review}) => {
    return (
       <div> 
                      
            
              <Col className="mb-5 py-4"> 
             <Card className="d-block w-30 col" style={{ width: '18rem',height:'200px'}}>
                <Card.Img className='text-center' style={{height:'35px',width:'35px'}} variant="top" src="" />
                <Card.Body>
                    <Card.Title>
                    {Review.name}
                    </Card.Title>
                    {Review.Designation}
                    <Card.Text>

                        {Review.DetailsReview}

                   </Card.Text>
                </Card.Body>
            </Card> 
            </Col>
            
            </div>

      
     );
};

export default TestimonialDetails;
