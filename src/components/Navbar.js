import React from 'react'
// import {Link} from 'react-router-dom';

function Navbar(props) {
  // const toggleMode=()=>{
  //   if(mode==="light"){
  //     setMode("dark")
  //     document.body.style.backgroundColor="black";
  //   }
  //   else{
  //     setMode("light")
  //     document.body.style.backgroundColor="white";
  //   }
  // }
  // const [mode,setMode]=useState("light");
  return (
    <>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="text"><b>TextUtils</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/about">About</a>
        </li>
        
        
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
       <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
       <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
</nav> 
    </>
  );
}

export default Navbar;
