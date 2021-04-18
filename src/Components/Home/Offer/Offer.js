import React from 'react';
import './Offer.css';
 
import OfferImg from '../../../Image/homebg.png'
const Offer = () => {
    return (
        <div style={{width:'100%',paddingTop:'50px'}} class="container">
            <img class='float-start float-start' src={OfferImg} alt ='hello'/>
             <p class='h2'> Heating and Air Conditioning
             Maintainence Services</p> 
             <p className="h1">Get 50% Special Off</p>
            <button class="btn"> Find More Offer</button>
        </div>
    );
};

export default Offer;