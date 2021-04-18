import React, { useMemo, useState } from "react";
 
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
   
} from "@stripe/react-stripe-js";
 
const useOptions = () => {
 
   const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize:"18px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [ ]
  );

  return options;
};

const PaymentCard = ({Price,displayName,email,ServiceTitle,imageURL}) => {
  const Status ="";
  const orderInfo ={
    Price,displayName,email,ServiceTitle,Status,imageURL
  }
 console.log(orderInfo,'top')
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentDetails, setPaymentDetails] = useState(false)
  

  const handleSubmit = async event => {

    fetch("http://localhost:4000/addOrderInfo", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
  })
      .then((res) => res.json())
      .then((data) => {
         
        setPaymentDetails(data);
      })
      .catch((err) => {
          console.log(err);
      });
      
   

     
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
       
     
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
    console.log(payload.type)
    
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label style={{paddingRight:'5px'}}>Your Service Charged: ${Price}</label>
      <button class="btn btn-success" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default PaymentCard;
