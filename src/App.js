import React,{useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Alert from './components/Alert';
import About from './components/About';
import Textform from './components/Textform';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState("");
  
  // const btn = ()=>{
  //   if(mode==="light"){
  //     setBtnText("Enable darkmode")
  //   }
  //   else{
  //     setBtnText("Enable lightmode")
  //   }
  // }
  
  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(()=>{
    setAlert("");
   },1500);
  }
  const removeBodyClasses=()=>{
 document.body.classList.remove('bg-light')
 document.body.classList.remove('bg-primary')
 document.body.classList.remove('bg-success')
 document.body.classList.remove('bg-danger')
 document.body.classList.remove('bg-warning')
 document.body.classList.remove('bg-dark')
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled","success");
      // document.title="Light mode";
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing ";
      // },2000);
      // setInterval(()=>{
      //   document.title="TextUtils install now ";
      // },1500);
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor="rgb(5 51 78)";
      showAlert("Dark mode is enabled","success");
      // document.title="Dark mode";
      
    }
  }
  return (
   <>
  
   <Router>
   <Navbar mode={mode} toggleMode={toggleMode} /> 
   <Alert alert={alert} />
   <div className="container my-3">
    <Switch>
      <Route exact path="/about">
        <About mode={mode}/>
      </Route>
      <Route exact path="/">
      <Textform heading="Try Textutil-Word counter,Character Counter,Remove Extra Spaces" mode={mode} showAlert={showAlert}/>
      </Route>
    </Switch>
   </div>
   
    </Router>
   </>
  );
}
export default App;
