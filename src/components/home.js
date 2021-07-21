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
      console.log(res.data);
      if(res.data) setUserInfo(res.data)
      else if(!res.data){
        console.log("home no data supposed to go to login")
        // window.location="/login"
      }
    }).catch(error => {
      console.log("home auth check" ,error)
      // window.location="/login"
    })
  },[])
  return(
    <div>{userInfo ? <Posts userInfo={userInfo}/> : "Loading..."}
    
    </div>
  )
} 

export default Home