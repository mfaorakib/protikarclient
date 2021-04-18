import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Location from '../../../Image/locationIcon.png'
const Footer = () => {
    return (
        <div class ='justify-content-center'>
     <Row style={{paddingTop:'30px',backgroundColor:'#343A40', color:'white'}} class ='d-flex flex-row mb-3 justify-content-center'>
    <Col sm={6}> 
     <img style={{ height: '50px', width: '50px' }} src={Location}alt="je" srcset=""/>
     <p className="h5">202A, Helsinki, New Alaska, USA.</p> 
    </Col>
    <Col sm={2}>
    <p className="h5">Company</p> 
     <p> About </p>
     <p>Project</p>
     <p> Our Teams</p>
     <p>Terms & Condition </p>
           </Col>
    <Col sm={2}>
    <p className="h5">Explore Links</p> 
     <p>Testimonial</p>
     <p>Contact</p>
     <p>NewsLetter</p>
    </Col>
    <Col sm={2}>
    <p className="h5">Social</p>
    <p>instagram</p>
    <p>facebook</p>
    <p>snapchat</p> 
    </Col>
  </Row>
        </div>
    );
};

export default Footer;