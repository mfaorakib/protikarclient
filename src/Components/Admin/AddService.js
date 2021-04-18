import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
   const [imageURL, setImageURL] = useState(null)

 const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
     //console.log(data.Description)
   const ServiceData = {
      ServiceTitle: data.ServiceTitle,
      Description: data.Description,
      Price: data.Price,
      imageURL: imageURL
  }
  const url = "http://localhost:4000/addService";
   
  fetch(url,{
   method: 'POST',
   headers:{
       'Content-Type':'application/json'
   },
   body:JSON.stringify(ServiceData)
})
.then(res=> console.log(res,'server side response'))
 
console.log(data.ServiceTitle,data.Description)

  };
  const handleImageUpload = event =>{
   console.log(event.target.files[0])
   const imageData = new FormData();
   imageData.set('key','53585abcb313d61236aa90cd04fdbe90')
   imageData.append('image', event.target.files[0])

  
   axios.post('https://api.imgbb.com/1/upload', imageData )
  .then(function (response) {
    setImageURL(response.data.data.display_url);
  })
  .catch(function (error) {
    console.log(error);
  });
}
console.log(errors);
  console.log(errors);
    return (
         
         <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
            <div className="col">
            <label for="exampleFormControlInput1" class="form-label">ServiceTitle</label>
     
     <input  class="form-control" type="text" placeholder="ServiceTitle" {...register("ServiceTitle", { maxLength: 80})} />
      
     <label for="exampleFormControlTextarea1" class="form-label">Description</label>

     <textarea  class="form-control" {...register("Description", { maxLength: 300})} />
     <label for="exampleFormControlInput1" class="form-label">Price</label>
     
     <input  class="form-control" type="number" placeholder="Price" {...register("Price", { maxLength: 80})} />
      
            </div>
         <div className="col">
         <label for="formFileSm" class="form-label">Image</label>
        <input  class="form-control" id="formFileSm" type="file" placeholder="file" {...register}  onChange= {handleImageUpload}/>
       <br/>
      <input class="btn btn-primary mb-3" type="submit" />
         </div>
         

      </div>
      </form>
         
    );
};

export default AddService;