import React, { useEffect, useState } from 'react';
 
import { Row } from 'react-bootstrap';
import TestimonialDetails from './TestimonialDetails';

  
const Testimonial = () => {
  const [review, setReviews] = useState([])


  useEffect(() => {
      fetch('http://localhost:4000/Review')
          .then(res => res.json())
          .then(data => setReviews(data))

  }, [])
  return (
   
      
      <Row>
        {
          review.map(Review=> <TestimonialDetails Review={Review}></TestimonialDetails>)
        }
       </Row>
       
  );
};

export default Testimonial;