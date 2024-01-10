import React,{useState} from 'react'

function Textform(props) {
    const upperClicked=()=>{
        // console.log("Uppercase is clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const lowerClicked=()=>{
        // console.log("Uppercase is clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }
    const clearAll=()=>{
      setText("");
      props.showAlert("All clear","success");
  }
    const handleOnChange=(event)=>{
        // console.log("On change function");
        setText(event.target.value);
    }
    const handleCopyText=()=>{
      var text=document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied","success");
    }
    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(""))
      props.showAlert("Exptra spaces removed","danger");
    }
     const[text,setText]=useState("");
    //  text="Iam changing ";  this is wong way to change state
    // setText("new text");  this is right way to change the state
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>

      <h2>{props.heading}</h2>
      <div className="mb-3">
        {/* <label htmlForfor="mybox" className="form-label" >Example textarea</label> */}
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(20 38 86)':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="5"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={upperClicked}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={lowerClicked}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove space</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={clearAll}>Clear All</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the about to preview it here"}</p>
    </div>
    </>
  );
}
export default Textform;