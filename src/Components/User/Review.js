import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Review = () => {
  const { id } = useParams();
  console.log(id)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {


      const ReviewData = {
               name: data.YourName,
               Designation: data.Designation,
               DetailsReview:data.DetailsReview
           }
    const url = "http://localhost:4000/addReview";
    
    fetch(url,{
     method: 'POST',
     headers:{
         'Content-Type':'application/json'
     },
     body:JSON.stringify(ReviewData)
  })
  .then(res=> console.log(res,'server side response'))
   
  console.log(data.YourName,data.DetailsReview)
  
    };
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input  class="form-control "  type="text" placeholder="Your Name" {...register("YourName", { maxLength: 80})} />
        <br/>
        <input  class="form-control "  type="text" placeholder="CompanyName,Designation" {...register("Designation", { maxLength: 80})} />
        <br/>
        <textarea  class="form-control" placeholder="Details"{...register("DetailsReview")} />
        <br/>
  
        <input class="btn btn-primary mb-3" type="submit" />
      </form>
    );
};

export default Review;