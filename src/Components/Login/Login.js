import { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { handleGoogleSignIn, LoginFrameWork,emailSignIn } from './Userlogin';


const Login = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)

     let history = useHistory();
    let location = useLocation();


  let { from } = location.state || { from: { pathname: "/" } };

    LoginFrameWork()
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then((res) => {

                const { displayName, email, photoURL } = res;
                const newUser = {
                    displayName, email, photoURL
                }
                setLoggedInUser(newUser)
                history.replace(from);
          })
            .catch((error) => {
                console.log(error)
            })
    
    

    }
    const emailSignInNew = ()=>{
        emailSignIn()
                 
            }       
    return (
      <div>       
           <h4 class="d-flex justify-content-center" >Please Login first</h4>
           <div>
                <input type="text" name="name" id="name"/>
               <input type="email" name="email" id="email"/><br/>
               <input type="password" name="password" id="password"/><br/>
              <input onClick={emailSignInNew} type="submit" value="submit"/>
           </div>
                 
                <div class="d-flex justify-content-center">
                
                
                <button class="btn btn-outline-success" onClick={googleSignIn}><a class="btn btn-lg btn-google btn-block text-uppercase btn-outline " href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Signup Using Google</a> </button>
                {/* */}
            </div>
        </div>
    )
};

export default Login;
