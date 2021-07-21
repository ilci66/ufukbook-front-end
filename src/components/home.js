import Posts from './posts/posts'
import React, { useState, useEffect } from 'react';
import { Form,FormControl,Button } from 'react-bootstrap'

import axios from 'axios';

const Home = () => {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    axios({
      method: "GET",
      // withCredentials: true,
      url: "https://ufukbook.herokuapp.com/auth",
    }).then((res) => {
      console.log("this is the res data" ,res.data);
      if(res.data) {return setUserInfo(res.data)}
      else if(!res.data){
        console.log("home no data supposed to go to login,", )
        // window.location="/login"
      }
    }).catch(error => {
      console.log("home auth caught this error" ,error)
      // window.location="/login"
    })
  },[])
  return(
    <div>
      {/* {userInfo ? <Posts userInfo={userInfo}/> : "Loading..."} */}
      {userInfo ? "there is userinfo actually" : "Loading..."}
    
    </div>
  )
} 

export default Home