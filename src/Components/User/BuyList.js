import React, { useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import BuyListCard from './BuyListCard';

const BuyList = () => {

  const [orderslist, setOrderslist] = useState([])

   
  useEffect(() => {
    const uri = "https://completewebsiteservermfaorakib.herokuapp.com/orderList" 
          
   fetch(uri) 
   .then(res => res.json())
   .then(data => 
           {  
             console.log(data)
                setOrderslist(data)      
           })
}, [])
    return (
        <div>
          <Row>
            {
              orderslist.map(order=><BuyListCard order={order}></BuyListCard>)
            }
            </Row>
        </div>
    );
};

export default BuyList;