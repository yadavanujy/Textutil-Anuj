import React,{useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Alert from './components/Alert';
// import About from './components/About';
import Textform from './components/Textform';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


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

  const toggleMode=()=>{
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
      document.body.style.backgroundColor="rgb(20 38 86)";
      showAlert("Dark mode is enabled","success");
      // document.title="Dark mode";
      
    }
  }
  return (
  <>
  
   <Navbar mode={mode} toggleMode={toggleMode} /> 
   <Alert alert={alert} />
   <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
   </>
  );
}
export default App;
