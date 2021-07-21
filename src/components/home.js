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
      //adding headers to see if it works this way
      // headers: {
      //       'Content-Type': 'application/json',
      //        Accept: 'application/json'
      // },
      url: "https://ufukbook.herokuapp.com/auth",
    }).then((res) => {
      console.log("this is the res>>", res ,"and this is the type of res data>>", typeof res.data);
      if(res.data) {
        console.log(res.data)
        return setUserInfo(res.data)
      }
      else if(!res.data){
        console.log("home no res data supposed to go to login")
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