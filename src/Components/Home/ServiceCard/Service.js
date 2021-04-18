import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
 

const Service = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('http://localhost:4000/Services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
     return (
         <div>
             <h2 style={{paddingTop:'10px'}} class="text-center" >Our Services</h2>
             <div class="d-flex justify-content-center" style={{marginLeft:'20px' }}>
            
            <Row class="d-flex justify-content-center" style={{width:'98%',paddingTop:'20px',}}>
            
            {
                services.map(Service =><ServiceCard Service={Service}></ServiceCard>)
            }
            </Row>
        </div>
        </div>
    );
};

export default Service;