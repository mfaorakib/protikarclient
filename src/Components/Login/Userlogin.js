import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.Config";
 

export const LoginFrameWork=()=>{
    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
}
export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
  

 
  return firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            var user = result.user;
            console.log(user)
            return user;

        }).catch((error) => {
            var errorMessage = error.message;
             return  errorMessage;
        });
    
};


export const emailSignIn=()=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}