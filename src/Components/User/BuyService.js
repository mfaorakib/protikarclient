import React, { useContext, useEffect, useState } from 'react';
import {  Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
 import { useParams } from 'react-router';
import { UserContext } from '../../App';
import PaymentCard from './PaymentCard';
 
const stripePromise = loadStripe('pk_test_51IeFqBF3UEOO6IxUMBOS948f0UdMfOSrYDwZfJEqn70vaKFXlFrj4I3EW5Nnc44xRxorCjPn1bde9ZIe38y76RnW00l5PX2w9H');
 const BuyService = () => { 
    const {id} = useParams();
     
    const { loggedInUser } = useContext(UserContext)
     const {email,displayName} = loggedInUser;
     console.log(email,displayName)
    const [services, setServices] = useState([])
    const {ServiceTitle,Price,imageURL} =services;
    console.log(ServiceTitle)
     useEffect(() => {
         const uri = `https://completewebsiteservermfaorakib.herokuapp.com/BuyServices/${id}` 
               
        fetch(uri) 
        .then(res => res.json())
            
            .then(data => 
                {
                     
                    setServices(data)
                    
                })

    }, [id])
    
    return (
     <div>
       <label>Name: {displayName} </label><br/>
         <label>Email: {email}</label> <br/>
         <label>ServiceTitle: {ServiceTitle}</label><br/>
         <Elements stripe={stripePromise}>
         <PaymentCard Price={Price} ServiceTitle ={ServiceTitle}
         
         email={email} displayName={displayName} imageURL={imageURL}
         
         >
         
         </PaymentCard>
        </Elements>


     </div>
    );
};

export default BuyService;