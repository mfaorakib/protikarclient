import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddService from './AddService';
import MakeAdmin from './MakeAdmin';
import ManageService from './ManageService';
import plus from '../../Image/plus.png';
import AddUser from '../../Image/addUser.png'
import ManageServices from '../../Image/ManageServices.png'
import List from '../../Image/OrderList.png'
import OrderList from './OrderList';
import BuyList from '../User/BuyList';
import Review from '../User/Review'
import PaymentCard from '../User/PaymentCard'

const Admin = () => {
    const [role, setRole] = useState({
        action:'AddService'
    })

    return (
       
          <div style={{width: '99%',marginTop:'20px'}}>
       
                <Row>
                <Col class="col-6" style={{padding:'20px'}} sm={4}> 
                <Link style={{Color:'White',textDecoration:'none',paddingTop:'10px'}} onClick ={()=>setRole({action:'OrderList'})}>  
              
             
                <Button variant="outline-secondary" style={{width:'10rem',paddingTop:'10px'}}> <img style={{height:'1rem',
                fontSize:'3.75em'}} src={List} alt="Bootstrap"></img> OrderList</Button>    
             
      
                </Link>
                <br/>
                <br/>
                <Link  style={{Color:'White',textDecoration:'none',paddingTop:'10px'}} onClick ={()=>setRole({action:'AddService'})} > 
                
              <Button variant="outline-secondary" style={{width:'10rem',paddingTop:'10px'}}> <img style={{height:'1rem',
              fontSize:'3.75em'}} src={plus} alt="Bootstrap"></img> AddService</Button>

                </Link>
                <br/>
                
                <br/>
                <Link style={{Color:'White',textDecoration:'none',paddingTop:'10px'}} onClick ={()=>setRole({action:'MakeAdmin'})}   > 
              
                <Button variant="outline-secondary" style={{width:'10rem',paddingTop:'10px'}}> <img style={{height:'1rem',
               fontSize:'3.75em'}} src={AddUser} alt="Bootstrap"></img>MakeAdmin</Button>    
       
                </Link>
                <br/>
                <br/>
                <Link style={{Color:'White',textDecoration:'none',paddingTop:'10px'}} onClick ={()=>setRole({action:'ManageService'})}>  
              
             
                <Button variant="outline-secondary" style={{width:'10rem',paddingTop:'10px'}}> <img style={{height:'1rem',
                fontSize:'3.75em'}} src={ManageServices} alt="Bootstrap"></img>ManageService</Button>    
             
      
                </Link>
                 <br/>
                 <br/>
                <Link  style={{Color:'White',textDecoration:'none',paddingTop:'10px'}} onClick ={()=>setRole({action:'review'})} > 
                
                <Button variant="outline-secondary" style={{width:'10rem',paddingTop:'10px'}}> <img style={{height:'1rem',
                fontSize:'3.75em'}} src={plus} alt="Bootstrap"></img> review</Button>
  
                  </Link>
                  <br/><br/>
                  <Link  style={{Color:'White',textDecoration:'none',paddingTop:'10px'}} onClick ={()=>setRole({action:'BuyService'})} > 
                
                <Button variant="outline-secondary" style={{width:'10rem',paddingTop:'10px'}}> <img style={{height:'1rem',
                fontSize:'3.75em'}} src={plus} alt="Bootstrap"></img> BuyService</Button>
  
                  </Link>
                <br/><br/>
                
                </Col>
                 
          <Col sm={8}> 
                  {
                   role.action ==='AddService' && ( <div> <AddService></AddService></div>)
                  }
                  {
                   role.action ==='MakeAdmin' && (<div> <MakeAdmin></MakeAdmin></div>)
                  }
                  {
                     role.action ==='ManageService' && (<div> <ManageService></ManageService>   </div>)       
                  }
                  {
                     role.action ==='OrderList' && (<div> <OrderList></OrderList>   </div>)       
                  }  
                  {
                      role.action==='BuyService'&&(<div><BuyList></BuyList> </div>)
                  }
                   {
                      role.action==='review'&&(<div><Review></Review> </div>)
                  }
                  
          </Col>
       
             
              </Row>
    </div>
      
    );
};

export default Admin;