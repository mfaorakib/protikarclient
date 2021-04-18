import React, { useState } from 'react';
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from '../../Image/CartIcon.png';
import BuyLists from '../../Image/BuyList.png';
import Reviews from '../../Image/ReviewIcon.png';
import BuyService from './BuyService';
import BuyList from './BuyList';
import Review from './Review';


const User = () => {
    const [role, setRole] = useState({
        action:'BuyService'
    })
    return (
         
    <div style={{width: '99%',marginTop:'20px'}}>
       
       <Row>
       <Col class="col-6" style={{padding:'20px'}} sm={4}> 
       <Link style={{Color:'White',textDecoration:'none',paddingTop:'10px'}} onClick ={()=>setRole({action:'BuyService'})}>  
     
    
       <Button variant="outline-secondary" style={{width:'10rem',paddingTop:'10px'}}> <img style={{height:'1rem',
       fontSize:'3.75em'}} src={Cart} alt="Bootstrap"></img>BuyService</Button>    
    

       </Link>
       <br/>
       <br/>
       <Link  style={{Color:'White',textDecoration:'none',paddingTop:'10px'}} onClick ={()=>setRole({action:'BuyList'})} > 
       
     <Button variant="outline-secondary" style={{width:'10rem',paddingTop:'10px'}}> <img style={{height:'1rem',
     fontSize:'3.75em'}} src={BuyLists} alt="Bootstrap"></img> BuyList</Button>
      
                  

       </Link>
       <br/>
       
       <br/>
       <Link style={{Color:'White',textDecoration:'none',paddingTop:'10px'}} onClick ={()=>setRole({action:'Review'})}   > 
     
       <Button variant="outline-secondary" style={{width:'10rem',paddingTop:'10px'}}> <img style={{height:'1rem',
      fontSize:'3.75em'}} src={Reviews} alt="Bootstrap"></img>Review Customer</Button>    

       </Link>
       </Col>
       <Col sm={8}> 
                  {
                   role.action ==='BuyService' && ( <div> <BuyService></BuyService></div>)
                  }
                  {
                   role.action ==='BuyList' && (<div><BuyList></BuyList>  </div>)
                  }
                  {
                     role.action ==='Review' && (<div> <Review></Review>   </div>)       
                  }
                  
          </Col>
       </Row>
       </div>
         
    );
};

export default User;