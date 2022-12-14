import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from './context/ThemeContext';
import Home from "./Routes/Home";
import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";
import Account from "./Routes/Account";
import axios from 'axios'

function App() {
  const [coins , setCoins] = useState ([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'

  // useEffect(() => { axios.get(
  //   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
  // )
  // .then(res => {

  // setCoins(res.data);
  // console.log(res.data);
  // });

  // },[]);
  // must include the dependency array otherwise it will make endless calls to the url which will overload the server
  useEffect(() => { 
    axios.get(url).then(res => {
      setCoins(res.data)
     
    })
  },[url])
 
 return <ThemeProvider>
 <Navbar/>
 <Routes>
    <Route path='/' element={<Home coins={coins} />}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/account' element={<Account/>}/>
 </Routes>

 </ThemeProvider>;
};

export default App;
