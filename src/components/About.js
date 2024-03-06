import React from 'react'

 function About(props) {
    
    // const [myStyle,setMyStyle]=useState({
    //     color:"black",
    //     backgroundColor:"white",
    //     // border:"1px solid black"
    // });
  //  const[btnText,setBtnText]= useState("Enable dark mode");
  //   const toggleStyle=()=>{
  //       if(myStyle.color==="black"){
  //         setMyStyle({
  //           color:"white",
  //           backgroundColor:"black",
  //           // border:"1px solid white"
  //         })
  //         setBtnText("Enable light mode")
  //       }
  //       else{
  //           setMyStyle({
  //               color:"black",
  //               backgroundColor:"white"
  //           })
  //           setBtnText("Enable dark mode")
  //       }
  //   }

    let myStyle = {
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'rgb(5 51 78)':'white',
     
    }

  return (
    <>
    <div className='container my-3' style={myStyle}>
        <h2 className='my-3' style={{color:props.mode==='dark'?'white':'black'}}>About us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button> */}
</div>
    </>
  );
}
export default About;
