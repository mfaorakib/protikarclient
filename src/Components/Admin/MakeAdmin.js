import React from 'react';
import { useForm } from 'react-hook-form';
const MakeAdmin = () => {
const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
  console.log(data)

  
  fetch("https://completewebsiteservermfaorakib.herokuapp.com/addadmin",{
   method: 'POST',
   headers:{
       'Content-Type':'application/json'
   },
   body: JSON.stringify(data)
})
.then(res=> res.json())
.then(data=>console.log(data)) 
  console.log(errors);

}

    return (
       
             <form class="align-items-center" onSubmit={handleSubmit(onSubmit)}>
                 <div className="row ">
                     <div className="col align-items-center">
                     <input class="form-control" type="email"  placeholder="email" {...register("email", { maxLength: 80})} />
                     </div>
                     <div className="col">
                     <input class="btn btn-primary" type="submit" />
                     </div>
                 </div>
            
             </form>
        
    );
};

export default MakeAdmin;