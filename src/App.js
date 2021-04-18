import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
 import Header from './Components/Home/Header/Header';
import Admin from './Components/Admin/Admin';
import User from './Components/User/User';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
   const [IsAdmin, setIsAdmin] = useState(true)
  return (
     <UserContext.Provider value={{loggedInUser, setLoggedInUser,IsAdmin,setIsAdmin}}>
    <Router>
    <Switch>
    <Route exact path="/">
  <Home></Home>
    </Route>
    
    <Route path="/Login">
      <Header></Header>
    
      <Login></Login>
    </Route>
    <Route path="/Admin">
      <Admin></Admin>
           </Route>
           <Route path="/User">
            <User></User>
           </Route>
           <PrivateRoute path="/BuyServices/:id">
            
            <User></User> 
           </PrivateRoute>
           
  </Switch>
  </Router>
 </UserContext.Provider>
  );
}

export default App;
