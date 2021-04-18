import React, { useEffect, useState } from 'react';
import {Table } from 'react-bootstrap';
 
const OrderList = () => {
  const [orderslist, setOrderslist] = useState([])
  const [select, setSelect] = useState("")
  const [statusId, selectedId] = useState("") 
   
  useEffect(() => {
    const uri = "http://localhost:4000/orderList" 
          
   fetch(uri) 
   .then(res => res.json())
   .then(data => 
           {  
                setOrderslist(data)      
           })
}, [])


 
console.log(orderslist)

const handleUpdateStatus=(id)=>{
    const Status = select;
    const orderslist ={
      Status
    }
  fetch(`http://localhost:4000/update/`+statusId,{
    method:"PATCH",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(orderslist)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
  })
  console.log(select)
}
    return (
        <div>   


   <Table>
  <thead>
    <tr>
       
      <th>Name</th>
      <th>Service Name</th>
      <th>email</th>
      <th>Pay with</th>
      <th>Status</th>

    </tr>
  </thead>
    
  <tbody>
     {
       orderslist.map(order=> 
        <tr>
         <td> {order.displayName}</td>
        <td>{order.ServiceTitle}</td>
        <td>{order.email}</td>
        <td>Credit Card </td>
        <td>
     <select class="form-select" aria-label="Default select example" onChange={(e)=>{
         const selectValue= e.target.value;
         setSelect(selectValue)
         selectedId(order._id)
     }}

     >
     <option selected value="Done">Done</option>
     <option value="Ongoing">Ongoing</option>
     <option value="Pending">Pending</option>
     </select>
     <button onClick={()=>handleUpdateStatus()}>Submit </button>
      </td>
      </tr>
 ) }
    </tbody>
    </Table> 

</div>
    );
};

export default OrderList;